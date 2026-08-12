---
name: I_CNSLDTNREPORTINGLEVEL
description: "Cnsldtnreportinglevel"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNREPORTINGLEVEL

**Cnsldtnreportinglevel**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationReportingLevel` | ✓ | |  | `cast(left(_Domain.DomainValue, 2) as fincs_reportinglevel preserving type )` |  |  |
| `DomainValue` |  | | `_Domain` | `DomainValue` |  |  |
| `_Text` | | ✓ | | | | |
| `_Text_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnReportingLevelT` | [0..*] |
| `_Text_2` | `I_CnsldtnReportingLevelText_2` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCRPTLEVL',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
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
    resultSet.sizeCategory: #XS,
    representativeKey: 'ConsolidationReportingLevel',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationReportingLevel'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Reporting Level'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnReportingLevel
  as select from P_CnsldtnDomain(P_DomainName : 'FINCS_RPTLEVL') as _Domain

  association [0..*] to I_CnsldtnReportingLevelT as _Text on $projection.ConsolidationReportingLevel = _Text.ConsolidationReportingLevel
  
  association [0..*] to I_CnsldtnReportingLevelText_2 as _Text_2 on $projection.ConsolidationReportingLevel = _Text_2.ConsolidationReportingLevel
  
{
      @ObjectModel.text.association: '_Text_2'
  key cast(left(_Domain.DomainValue, 2) as fincs_reportinglevel preserving type ) as ConsolidationReportingLevel,

      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      _Domain.DomainValue, // required for search only


      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element: {releaseState: #DEPRECATED, successor: '_Text_2'}
      _Text,
      _Text_2
};
```
