---
name: I_BPCOLLECTIONPROFILEASSGMT
description: "Bpcollectionprofileassgmt"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_BPCOLLECTIONPROFILEASSGMT

**Bpcollectionprofileassgmt**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BPCollPrflAssignmentValidTo` | ✓ | |  | `valid_until` |  |  |
| `BPCollPrflAssignmentValidFrom` |  | |  | `valid_from` |  |  |
| `CollectionProfile` |  | |  | `coll_profile` |  |  |
| `LastChangeDateTime` |  | |  | `last_changed_at` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CollectionsProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CollectionsProfile` | `I_CollectionsProfile` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCOLLPROFILE',
                compiler: { compareFilter: true },
                preserveKey: true }
@AccessControl: { authorizationCheck: #CHECK }
@EndUserText: { label: 'Business Partner Collection Profile Assignment' }
@VDM: { viewType:  #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory: #L,
                             dataClass: #TRANSACTIONAL },
                semanticKey: [ 'BusinessPartner',
                               'CollectionProfile' ],
                representativeKey: 'BPCollPrflAssignmentValidTo' }
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION ]                
@Consumption: { dbHints: [ 'USE_HEX_PLAN' ] }

define view I_BPCollectionProfileAssgmt
  as select from udmbpprofile

  // VDM Associations
  // Business Partner
  association [0..1] to I_BusinessPartner    as _BusinessPartner    on $projection.BusinessPartner = _BusinessPartner.BusinessPartner

  // Collection Profile
  association [0..1] to I_CollectionsProfile as _CollectionsProfile on $projection.CollectionProfile = _CollectionsProfile.CollectionProfile

{
 @ObjectModel: { foreignKey: { association: '_BusinessPartner' } }
  key partner         as BusinessPartner,
  key valid_until     as BPCollPrflAssignmentValidTo,
      valid_from      as BPCollPrflAssignmentValidFrom,
      coll_profile    as CollectionProfile,
      last_changed_at as LastChangeDateTime,

      // Exposed Associations
      _BusinessPartner,
      _CollectionsProfile

}
```
