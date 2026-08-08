---
name: I_CNSLDTNSYSTEMMESSAGETYPE
description: "Cnsldtnsystemmessagetype"
app_component: FIN-CS-COR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - component:FIN-CS-COR-IS-2CL
  - lob:Other
---
# I_CNSLDTNSYSTEMMESSAGETYPE

**Cnsldtnsystemmessagetype**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnSystemMessageType` | ✓ | |  | `cast(left(_Domain.DomainValue, 1) as fincs_msg_type preserving type )` |  |  |
| `DomainValue` |  | | `_Domain` | `DomainValue` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSystemMessageTypeT` | [0..*] |

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
    representativeKey: 'CnsldtnSystemMessageType',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
    sapObjectNodeType.name: 'CnsldtnSystemMessageType'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation System Message Type'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnSystemMessageType
  as select from P_CnsldtnDomain(P_DomainName : 'FINCS_MSG_TYPE') as _Domain

  association [0..*] to I_CnsldtnSystemMessageTypeT as _Text on $projection.CnsldtnSystemMessageType = _Text.CnsldtnSystemMessageType

{
      @ObjectModel.text.association: '_Text'
  key cast(left(_Domain.DomainValue, 1) as fincs_msg_type preserving type ) as CnsldtnSystemMessageType,

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
