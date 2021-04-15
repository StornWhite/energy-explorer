### Shared resources

This package exists to enable easy imports from all parts of the application. In the
top-level `package.json`, this package is included as a `file:` dependency. From anywhere
within the app, code from the `common` directory can be imported like so:

```typescript
import { Card } from 'energy-explorer/components';
```

This spares us from having to use large relative paths for such imports:

```typescript
import { Card } from '../../../common/components';
```
