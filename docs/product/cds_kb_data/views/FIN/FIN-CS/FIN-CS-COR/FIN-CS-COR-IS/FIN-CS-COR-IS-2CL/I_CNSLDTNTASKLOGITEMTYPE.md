---
name: I_CNSLDTNTASKLOGITEMTYPE
description: "Cnsldtntasklogitemtype"
app_component: FIN-CS-COR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - item-level
  - component:FIN-CS-COR-IS-2CL
  - lob:Other
---
# I_CNSLDTNTASKLOGITEMTYPE

**Cnsldtntasklogitemtype**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnTaskLogItemType` | ✓ | |  | `cast(left(_Domain.DomainValue, 2) as fincs_lineitemtype preserving type )` |  |  |
| `DomainValue` |  | | `_Domain` | `DomainValue` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnTaskLogItemTypeT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    resultSet.sizeCategory: #XS,
    representativeKey: 'CnsldtnTaskLogItemType',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
    sapObjectNodeType.name: 'CnsldtnTaskLogItemType'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Task Log Item Type'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnTaskLogItemType
  as select from P_CnsldtnDomain(P_DomainName : 'FINCS_LINEITEMTYPE') as _Domain

  association [0..*] to I_CnsldtnTaskLogItemTypeT as _Text on $projection.CnsldtnTaskLogItemType = _Text.CnsldtnTaskLogItemType

{
      @ObjectModel.text.association: '_Text'
  key cast(left(_Domain.DomainValue, 2) as fincs_lineitemtype preserving type ) as CnsldtnTaskLogItemType,

      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      _Domain.DomainValue, // required for search


      _Text
};
```
