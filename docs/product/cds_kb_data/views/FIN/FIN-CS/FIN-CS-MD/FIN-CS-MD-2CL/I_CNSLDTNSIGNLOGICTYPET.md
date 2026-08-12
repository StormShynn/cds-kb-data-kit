---
name: I_CNSLDTNSIGNLOGICTYPET
description: "Cnsldtnsignlogictypet"
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
# I_CNSLDTNSIGNLOGICTYPET

**Cnsldtnsignlogictypet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_DomainT.Language as spras preserving type )` |  |  |
| `ConsolidationSignLogicType` | ✓ | |  | `cast(left(_DomainT.DomainValue, 1) as fincs_signlogictype preserving type )` |  |  |
| `ConsolidationSignLogicTypeText` |  | |  | `cast(_DomainT.DomainValueText as fincs_signlogictypetext preserving type )` |  |  |
| `DomainValue` |  | | `_DomainT` | `DomainValue` |  |  |
| `_SignLogicType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SignLogicType` | `I_CnsldtnSignLogicType` | [1..1] |

## Source Code

```abap
@Analytics: {
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
    dataCategory: #TEXT,
    representativeKey: 'ConsolidationSignLogicType',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ],
    sapObjectNodeType.name: 'ConsolidationSignLogicTypeText'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Sign Logic Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnSignLogicTypeT
  as select from P_CnsldtnDomainText(P_DomainName : 'FINCS_SIGN') as _DomainT

  association [1..1] to I_CnsldtnSignLogicType as _SignLogicType on $projection.ConsolidationSignLogicType = _SignLogicType.ConsolidationSignLogicType

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(_DomainT.Language as spras preserving type )                           as Language,

      @ObjectModel.foreignKey.association: '_SignLogicType'
  key cast(left(_DomainT.DomainValue, 1) as fincs_signlogictype preserving type ) as ConsolidationSignLogicType,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      cast(_DomainT.DomainValueText as fincs_signlogictypetext preserving type )  as ConsolidationSignLogicTypeText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      _SignLogicType,
      _DomainT._Language
};
```
