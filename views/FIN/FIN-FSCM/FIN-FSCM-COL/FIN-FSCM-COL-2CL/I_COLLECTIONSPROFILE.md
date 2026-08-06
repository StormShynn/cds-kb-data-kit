---
name: I_COLLECTIONSPROFILE
description: Collectionsprofile
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-COL
  - interface-view
  - collection
  - component:FIN-FSCM-COL-2CL
  - lob:Other
---
# I_COLLECTIONSPROFILE

**Collectionsprofile**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CollectionProfile` | `} key coll_profile` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollectionsProfileText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'ICOLLSPRF',
                compiler: { compareFilter: true },
                preserveKey: true }
@AccessControl: { authorizationCheck: #NOT_REQUIRED }
@EndUserText: { label: 'Collections Profile' }
@VDM: { viewType:  #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #CUSTOMIZING },
                semanticKey: [ 'CollectionProfile' ],
                representativeKey: 'CollectionProfile' }
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION ]                

define view I_CollectionsProfile
  as select from udm_coll_prof

  // VDM Associations
  association [0..*] to I_CollectionsProfileText as _Text on $projection.CollectionProfile = _Text.CollectionProfile

{
      // VDM Fields
      @ObjectModel: { text: { association: '_Text' } }
  key coll_profile as CollectionProfile,

      // Exposed Associations
      _Text

}
```
