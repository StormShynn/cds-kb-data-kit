---
name: I_CNSLDTNMDSOURCE
description: "This CDS view returns the sources of additional master data. The following sources exist: Accounting, which is represented by the value ACCTG Consolidation, which is represented by the value of CNSLDTN This CDS view provides the prerequisites for answering the following business questions: Which sources of additional master data do exist?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCE')/$value
semantic_en: "This CDS view returns the sources of additional master data. The following sources exist: Accounting, which is represented by the value ACCTG Consolidation, which is represented by the value of CNSLDTN This CDS view provides the prerequisites for answering the following business questions: Which sources of additional master data do exist?"
semantic_vi: "Master Data Source — CDS view giao diện dựa trên P_CnsldtnDomain."
keywords:
  - "master"
  - "data"
  - "source"
  - "additional"
  - "domain"
  - "value"
tags:
  - FIN
  - account
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
---
# I_CNSLDTNMDSOURCE

**This CDS view returns the sources of additional master data. The following sources exist: Accounting, which is represented by the value ACCTG Consolidation, which is represented by the value of CNSLDTN This CDS view provides the prerequisites for answering the following business questions: Which sources of additional master data do exist?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AdditionalMasterDataSource` | ✓ | |  | `cast( _Domain.DomainValue as fincs_md_source preserving type )` | `CHAR(10)` | Master Data Source |
| `DomainValue` |  | | `_Domain` | `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnMDSourceT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCE')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNMDSOURCE',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: false
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S},
  resultSet.sizeCategory: #XS,
  representativeKey: 'AdditionalMasterDataSource',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Master Data Source'

define view I_CnsldtnMDSource
  as select from P_CnsldtnDomain(P_DomainName : 'FINCS_MD_SOURCE') as _Domain

  association [0..*] to I_CnsldtnMDSourceT as _Text on $projection.AdditionalMasterDataSource = _Text.AdditionalMasterDataSource
{
      @ObjectModel.text.association: '_Text'
  key cast( _Domain.DomainValue as fincs_md_source preserving type ) as AdditionalMasterDataSource,

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
