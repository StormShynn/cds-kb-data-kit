---
name: I_CNSLDTNSIGNLOGICTYPE
description: "Cnsldtnsignlogictype"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSIGNLOGICTYPE

**Cnsldtnsignlogictype**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationSignLogicType` | ✓ | |  | `cast(left(_Domain.DomainValue, 1) as fincs_signlogictype preserving type )` |  |  |
| `DomainValue` |  | | `_Domain` | `DomainValue` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSignLogicTypeT` | [0..*] |

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
    representativeKey: 'ConsolidationSignLogicType',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
    sapObjectNodeType.name: 'ConsolidationSignLogicType'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Sign Logic Type'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnSignLogicType
  as select from P_CnsldtnDomain(P_DomainName : 'FINCS_SIGN') as _Domain

  association [0..*] to I_CnsldtnSignLogicTypeT as _Text on $projection.ConsolidationSignLogicType = _Text.ConsolidationSignLogicType

{
      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSignLogicTypeVH',
          element: 'ConsolidationSignLogicType'
        }
      }]
  key cast(left(_Domain.DomainValue, 1) as fincs_signlogictype preserving type ) as ConsolidationSignLogicType,

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
