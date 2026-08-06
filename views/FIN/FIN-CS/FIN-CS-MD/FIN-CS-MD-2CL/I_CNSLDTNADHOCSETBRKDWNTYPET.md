---
name: I_CNSLDTNADHOCSETBRKDWNTYPET
description: Cnsldtnadhocsetbrkdwntypet
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
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
# I_CNSLDTNADHOCSETBRKDWNTYPET

**Cnsldtnadhocsetbrkdwntypet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast(_DomainText.Language as spras preserving type )` |
| key `CnsldtnAdhocSetBrkdwnType` | `cast(left(_DomainText.DomainValue, 1) as fincs_adhocsetbrkdwntype preserving type )` |
| `CnsldtnAdhocSetBrkdwnTypeText` | `cast(_DomainText.DomainValueText as fincs_adhocsetbrkdwntype_desc preserving type )` |
| `DomainValue` | `_DomainText.DomainValue` |
| `_CnsldtnAdhocSetBrkdwnType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnAdhocSetBrkdwnType` | `I_CnsldtnAdhocSetBrkdwnType` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSADHSETBDTYPET',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
      dataClass: #MASTER,
      serviceQuality: #A,
      sizeCategory: #S},
  dataCategory: #TEXT,
  representativeKey: 'CnsldtnAdhocSetBrkdwnType',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Ad Hoc Set Breakdown Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnAdhocSetBrkdwnTypeT
  as select from P_CnsldtnDomainText(P_DomainName : 'FINCS_ADHOCSETBRKDWNTYPE') as _DomainText

  association [1..1] to I_CnsldtnAdhocSetBrkdwnType as _CnsldtnAdhocSetBrkdwnType on $projection.CnsldtnAdhocSetBrkdwnType = _CnsldtnAdhocSetBrkdwnType.CnsldtnAdhocSetBrkdwnType

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_DomainText.Language as spras preserving type )                                as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnAdhocSetBrkdwnType'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnAdhocSetBrkdwnTypeVH',
          element: 'CnsldtnAdhocSetBrkdwnType'
        }
      }]
  key cast(left(_DomainText.DomainValue, 1) as fincs_adhocsetbrkdwntype preserving type ) as CnsldtnAdhocSetBrkdwnType,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      cast(_DomainText.DomainValueText as fincs_adhocsetbrkdwntype_desc preserving type ) as CnsldtnAdhocSetBrkdwnTypeText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainText.DomainValue,

      // association
      _Language,
      _CnsldtnAdhocSetBrkdwnType
};
```
