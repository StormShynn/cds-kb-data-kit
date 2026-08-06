---
name: I_CNSLDTNSYSTEMMESSAGETYPET
description: Cnsldtnsystemmessagetypet
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
# I_CNSLDTNSYSTEMMESSAGETYPET

**Cnsldtnsystemmessagetypet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast(_DomainT.Language as spras preserving type )` |
| key `CnsldtnSystemMessageType` | `cast(left(_DomainT.DomainValue, 1) as fincs_msg_type preserving type )` |
| `CnsldtnSystemMessageTypeText` | `cast(_DomainT.DomainValueText as fincs_msg_type_text preserving type )` |
| `DomainValue` | `_DomainT.DomainValue` |
| `_SystemMessageType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SystemMessageType` | `I_CnsldtnSystemMessageType` | [1..1] |

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
    representativeKey: 'CnsldtnSystemMessageType',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ],
    sapObjectNodeType.name: 'CnsldtnSystemMessageTypeText'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation System Message Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnSystemMessageTypeT
  as select from P_CnsldtnDomainText(P_DomainName : 'FINCS_MSG_TYPE') as _DomainT

  association [1..1] to I_CnsldtnSystemMessageType as _SystemMessageType on $projection.CnsldtnSystemMessageType = _SystemMessageType.CnsldtnSystemMessageType

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(_DomainT.Language as spras preserving type )                           as Language,

      @ObjectModel.foreignKey.association: '_SystemMessageType'
  key cast(left(_DomainT.DomainValue, 1) as fincs_msg_type preserving type ) as CnsldtnSystemMessageType,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      cast(_DomainT.DomainValueText as fincs_msg_type_text preserving type )  as CnsldtnSystemMessageTypeText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      _SystemMessageType,
      _DomainT._Language
};
```
