# Social Proof Widget - Troubleshooting Supabase

## Erreur: "Failed to fetch visits: {}"

Cette erreur signifie que la table `visits` n'existe pas ou que vous n'avez pas les permissions pour la consulter.

### ✅ Checklist de Configuration

#### 1. Vérifier que la table existe

1. Allez à [Supabase Dashboard](https://app.supabase.com)
2. Sélectionnez votre projet
3. Allez à **Database > Tables**
4. Cherchez la table `visits`

**Si la table n'existe pas:**
1. Allez à **SQL Editor**
2. Collez le contenu complet de `SUPABASE_SETUP.sql`
3. Cliquez sur "Run"
4. Attendez le succès (pas d'erreur)

---

#### 2. Vérifier que Realtime est activé

1. Allez à **Database > Publications**
2. Cherchez **`supabase_realtime`**
3. Cliquez dessus pour voir les tables publiées
4. **IMPORTANT**: La table `visits` doit avoir une ✅ checkbox ACTIVÉE

**Si la table visits n'est pas cochée:**
1. Cochez la case `visits`
2. Cliquez "Save"

---

#### 3. Vérifier les Roles de Sécurité (RLS)

1. Allez à **Database > Tables**
2. Sélectionnez la table `visits`
3. Cliquez sur **RLS (Row Level Security)**
4. Vérifiez qu'il y a une policy:
   - Policy name: `visits_select_public`
   - Type: `SELECT`
   - Role: `anon`
   - Condition: `true`

**Si pas de policy:**
1. Allez à **SQL Editor**
2. Exécutez cette requête:

```sql
CREATE POLICY "visits_select_public"
ON public.visits
FOR SELECT
TO anon
USING (true);
```

---

#### 4. Vérifier votre Service Role Key

1. Allez à **Settings > API**
2. Sous "Project API keys", trouvez **"service_role"**
3. Copiez la clé complète
4. Ajoutez à `.env.local`:

```env
SUPABASE_SERVICE_ROLE_KEY=<votre_clé_ici>
```

⚠️ **ATTENTION**: Cette clé doit RESTER en `.env.local` (local dev). Pour la production (Vercel), ajoutez-la dans Vercel Settings > Environment Variables.

---

#### 5. Vérifier l'API /api/track

1. Redémarrez votre dev server (`npm run dev`)
2. Ouvrez http://localhost:9002
3. Ouvrez **Console du navigateur** (F12 > Console)
4. Cherchez des messages d'erreur
5. Allez à l'onglet **Network**
6. Rechargez la page
7. Cherchez une requête `/api/track`
8. Vérifiez que:
   - Status: `200` (pas 500 ou 404)
   - Response: `{"ok":true}`

**Si status est 500:**
- C'est l'API qui a un problème
- Vérifiez que `SUPABASE_SERVICE_ROLE_KEY` est dans `.env.local`
- Redémarrez le dev server

---

#### 6. Tester l'Insert manuel

1. Allez à Supabase > **SQL Editor**
2. Exécutez cette requête test:

```sql
INSERT INTO public.visits (page_path, city, country, lang, event_type)
VALUES ('/', 'Paris', 'FR', 'fr', 'visit');
```

3. Allez à **Table Editor > visits**
4. Vous devez voir la nouvelle ligne

**Si vous voyez la ligne:**
- ✅ La table fonctionne
- ✅ Supabase fonctionne
- Le problème est probablement côté client

---

### 🔧 Debug Avancé

#### Activer les logs détaillés

Dans `src/components/social-proof/social-proof-toasts.tsx`, changez:

```tsx
// Avant
.then(({ data, error }) => {
  if (error) {
    console.error("Failed to fetch visits:", error);

// Après
.then(({ data, error }) => {
  if (error) {
    console.error("Failed to fetch visits:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
```

#### Vérifier la connexion Supabase

Créez un fichier test: `src/lib/supabase-test.ts`

```typescript
import { supabaseClient } from "@/lib/supabase/client";

export async function testSupabaseConnection() {
  const sb = supabaseClient();
  
  try {
    const { data, error } = await sb.from("visits").select("count()");
    
    if (error) {
      console.error("Connection Error:", error);
      return false;
    }
    
    console.log("✅ Supabase Connection OK");
    console.log("Visit count:", data);
    return true;
  } catch (e) {
    console.error("Exception:", e);
    return false;
  }
}
```

Puis testez dans la console:

```javascript
import { testSupabaseConnection } from "@/lib/supabase-test";
await testSupabaseConnection();
```

---

### ✅ Checklist Complète (Ordre Recommandé)

- [ ] SQL exécuté dans Supabase (toutes les commandes, pas d'erreurs)
- [ ] Table `visits` visible dans Database > Tables
- [ ] Realtime activé: Database > Publications > `supabase_realtime` actif
- [ ] Table `visits` cochée dans Publications
- [ ] RLS activé et policy `visits_select_public` créée
- [ ] Service Role Key récupérée depuis Settings > API
- [ ] Service Role Key ajoutée à `.env.local`
- [ ] Dev server redémarré (`npm run dev`)
- [ ] `/api/track` répond 200 en Network tab
- [ ] Insert manuel teste OK (SQL test)
- [ ] Console du navigateur sans erreurs
- [ ] Widget activé: `NEXT_PUBLIC_SOCIAL_PROOF_ENABLED=true` dans `.env.local`
- [ ] Dev server redémarré
- [ ] Toasts visibles en bas à gauche! 🎉

---

### 📞 Si ça ne marche toujours pas

Envoyez-moi:
1. L'erreur exacte de la console
2. Le status de `/api/track` (Network tab)
3. Les logs de Supabase (Settings > Logs)
4. Une screenshot de Database > Publications montrant les tables

---

## Quick Fix

Si rien ne marche, essayez ça dans l'ordre:

```bash
# 1. Redémarrer tout
npm run dev

# 2. Effacer le cache Next.js
rm -rf .next

# 3. Relancer
npm run dev
```

---

**Status Widget**: Actuellement DÉSACTIVÉ (`NEXT_PUBLIC_SOCIAL_PROOF_ENABLED=false`)

Une fois Supabase configuré, changez à `true` et redémarrez le serveur!
