---
name: I_COLLECTIONSPROFILETEXT
description: "Collectionsprofiletext"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-COL
  - interface-view
  - text-view
  - text
  - collection
  - component:FIN-FSCM-COL-2CL
  - lob:Other
---
# I_COLLECTIONSPROFILETEXT

**Collectionsprofiletext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `lang` |  |  |
| `CollectionProfile` | ✓ | |  | `coll_profile` |  |  |
| `CollectionsProfileName` |  | |  | `coll_profile_txt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'ICOLLPRFTXT',
                compiler: { compareFilter: true },
                preserveKey: true }
@AccessControl: { authorizationCheck: #NOT_REQUIRED }
@EndUserText: { label: 'Collections Profile - Text' }
@VDM: { viewType: #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory: #L,
                             dataClass: #CUSTOMIZING },
                dataCategory: #TEXT,
                semanticKey: [ 'CollectionProfile' ],
                representativeKey: 'CollectionProfile' }
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]                

define view I_CollectionsProfileText
  as select from udm_coll_proft
  // VDM Associations
  // Language
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{

      // VDM Fields
      @Semantics: { language: true }
      @ObjectModel: { foreignKey: { association: '_Language' } }
  key lang             as Language,

  key coll_profile     as CollectionProfile,

      @Semantics: { text: true }
      coll_profile_txt as CollectionsProfileName,

      // Exposed Associations
      _Language

}
```
