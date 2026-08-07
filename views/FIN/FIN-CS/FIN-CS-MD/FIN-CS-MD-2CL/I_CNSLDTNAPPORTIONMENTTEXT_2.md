---
name: I_CNSLDTNAPPORTIONMENTTEXT_2
description: Cnsldtnapportionmenttext 2
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
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNAPPORTIONMENTTEXT_2

**Cnsldtnapportionmenttext 2**

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
| `ConsolidationApportionment` | ✓ | |  | `cast(left(_DomainT.DomainValue, 1) as fincs_apportionment)` |  |  |
| `ConsolidationApportionmentText` |  | | `_DomainT` | `DomainValueText` |  |  |
| `DomainValue` |  | | `_DomainT` | `DomainValue` |  |  |
| `_Apportionment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Apportionment` | `I_CnsldtnApportionment` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCRPFLGT_2',
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
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #TEXT,
    representativeKey: 'ConsolidationApportionment',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Apportionment - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnApportionmentText_2
  as select from P_CnsldtnDomainText(P_DomainName : 'FC_RPFLG') as _DomainT

  association [1..1] to I_CnsldtnApportionment as _Apportionment on $projection.ConsolidationApportionment = _Apportionment.ConsolidationApportionment

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(_DomainT.Language as spras preserving type )          as Language,

      @ObjectModel.foreignKey.association: '_Apportionment'
  key cast(left(_DomainT.DomainValue, 1) as fincs_apportionment) as ConsolidationApportionment,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      _DomainT.DomainValueText                                   as ConsolidationApportionmentText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      _Apportionment,
      _DomainT._Language
};
```
