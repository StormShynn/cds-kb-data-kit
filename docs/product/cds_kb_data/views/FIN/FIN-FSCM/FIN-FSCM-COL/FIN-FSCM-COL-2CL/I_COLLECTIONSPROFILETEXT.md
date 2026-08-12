---
name: I_COLLECTIONSPROFILETEXT
description: "Collectionsprofiletext"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
