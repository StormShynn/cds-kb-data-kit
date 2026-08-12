---
name: I_CNSLDTNREPORTINGLEVELTEXT_2
description: "Cnsldtnreportingleveltext 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CNSLDTNREPORTINGLEVELTEXT_2

**Cnsldtnreportingleveltext 2**

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
| `ConsolidationReportingLevel` | ✓ | |  | `cast(left(_DomainT.DomainValue, 2) as fincs_reportinglevel preserving type )` |  |  |
| `ConsolidationReportingLevelTxt` |  | | `_DomainT` | `DomainValueText` |  |  |
| `DomainValue` |  | | `_DomainT` | `DomainValue` |  |  |
| `_ReportingLevel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReportingLevel` | `I_CnsldtnReportingLevel` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCRPTLEVLT2',
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
    representativeKey: 'ConsolidationReportingLevel',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Reporting Level - Text'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_CnsldtnReportingLevelText_2
  as select from P_CnsldtnDomainText(P_DomainName : 'FINCS_RPTLEVL') as _DomainT

  association [1..1] to I_CnsldtnReportingLevel as _ReportingLevel on $projection.ConsolidationReportingLevel = _ReportingLevel.ConsolidationReportingLevel
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_DomainT.Language as spras preserving type )                            as Language,

      @ObjectModel.foreignKey.association: '_ReportingLevel'
  key cast(left(_DomainT.DomainValue, 2) as fincs_reportinglevel preserving type ) as ConsolidationReportingLevel,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      _DomainT.DomainValueText                                                     as ConsolidationReportingLevelTxt,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ReportingLevel,
      _DomainT._Language
};
```
