---
name: I_BPCOLLECTIONPROFILEASSGMT
description: "Bpcollectionprofileassgmt"
semantic_vi: "View BPCollectionProfileAssignment hiển thị các bản gán hồ sơ thu thập cho đối tác kinh doanh, cung cấp một hồ sơ lịch sử về các bản gán thời gian."
keywords:
  - "collection profile"
  - "assignment"
  - "business partner"
  - "historical record"
  - "collection profile assignment"
  - "bản gán hồ sơ thu thập"
  - "đối tác kinh doanh"
  - "hồ sơ lịch sử"
semantic_en: "The BPCollectionProfileAssignment view exposes collection profile assignments for business partners, providing a historical record of assignments over time. It can be used to analyze and report on collection profile assignments."
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
