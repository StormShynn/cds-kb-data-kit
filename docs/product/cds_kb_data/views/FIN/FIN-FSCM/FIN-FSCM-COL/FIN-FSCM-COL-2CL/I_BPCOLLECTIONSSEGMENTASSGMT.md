---
name: I_BPCOLLECTIONSSEGMENTASSGMT
description: "Bpcollectionssegmentassgmt"
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
# I_BPCOLLECTIONSSEGMENTASSGMT

**Bpcollectionssegmentassgmt**

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
| `CollectionSegment` | ✓ | |  | `coll_segment` |  |  |
| `BPCollSgmtAssignmentValidTo` | ✓ | |  | `valid_until` |  |  |
| `BPCollSgmtAssignmentValidFrom` |  | |  | `valid_from` |  |  |
| `CollectionGroup` |  | |  | `coll_group` |  |  |
| `CollectionSpecialist` |  | |  | `coll_specialist` |  |  |
| `CollectionBPMainContactPerson` |  | |  | `last_contact` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CollectionSegment` | | ✓ | | | | |
| `_CollectionGroup` | | ✓ | | | | |
| `_CollectionSpecialist` | | ✓ | | | | |
| `_MainContactPerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CollectionSegment` | `I_CollectionSegment` | [0..1] |
| `_CollectionGroup` | `I_CollectionGroup` | [0..1] |
| `_CollectionSpecialist` | `I_UserContactCard` | [0..1] |
| `_MainContactPerson` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCOLLSSGASSGNT',
                compiler: { compareFilter: true } }
@AccessControl: { authorizationCheck:     #MANDATORY,
                  personalData:           { blocking: #BLOCKED_DATA_EXCLUDED },
                  privilegedAssociations: [ '_CollectionSpecialist' ] }
@EndUserText: { label: 'Collection Segment Assignment' }
@VDM: { viewType: #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory: #L,
                             dataClass: #TRANSACTIONAL },
                semanticKey: [ 'BusinessPartner', 'CollectionSegment' ],
                representativeKey: 'BusinessPartner' }
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION ]
@Consumption: { dbHints: [ 'USE_HEX_PLAN' ] }

define view I_BPCollectionsSegmentAssgmt
  as select from udmbpsegments

  // VDM Associatons
  // Business Partner
  association [0..1] to I_BusinessPartner   as _BusinessPartner      on $projection.BusinessPartner = _BusinessPartner.BusinessPartner

  // Collection Segment
  association [0..1] to I_CollectionSegment as _CollectionSegment    on $projection.CollectionSegment = _CollectionSegment.CollectionSegment

  // Collection Group
  association [0..1] to I_CollectionGroup   as _CollectionGroup      on $projection.CollectionGroup = _CollectionGroup.CollectionGroup

  // Collection Specialist
  association [0..1] to I_UserContactCard   as _CollectionSpecialist on $projection.CollectionSpecialist = _CollectionSpecialist.ContactCardID

  // Last Contact Person
  association [0..1] to I_BusinessPartner   as _MainContactPerson    on $projection.CollectionBPMainContactPerson = _MainContactPerson.BusinessPartner

{

      // VDM Fields
      @ObjectModel: { foreignKey: { association: '_BusinessPartner' } }
  key partner         as BusinessPartner,

      @ObjectModel: { foreignKey: { association: '_CollectionSegment' } }
  key coll_segment    as CollectionSegment,

      @Semantics: { businessDate: { to: true } }
  key valid_until     as BPCollSgmtAssignmentValidTo,

      @Semantics: { businessDate: { from: true } }
      valid_from      as BPCollSgmtAssignmentValidFrom,

      @ObjectModel: { foreignKey: { association: '_CollectionGroup' } }
      coll_group      as CollectionGroup,

      @ObjectModel: { foreignKey: { association: '_CollectionSpecialist' } }
      coll_specialist as CollectionSpecialist,

      @ObjectModel: { foreignKey: { association: '_MainContactPerson' } }
      last_contact    as CollectionBPMainContactPerson,

      // Exposed Associations
      _BusinessPartner,
      _CollectionSegment,
      _CollectionGroup,
      _CollectionSpecialist,
      _MainContactPerson

}
```
