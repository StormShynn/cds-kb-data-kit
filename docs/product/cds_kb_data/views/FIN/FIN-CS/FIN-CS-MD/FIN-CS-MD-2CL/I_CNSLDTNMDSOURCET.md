---
name: I_CNSLDTNMDSOURCET
description: "Master Data Source - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCET')/$value
semantic_en: "Master Data Source - Text"
semantic_vi: "Master Data Source - Text — CDS view giao diện dựa trên P_CnsldtnDomainText."
keywords:
  - "master"
  - "data"
  - "source"
  - "text"
  - "language"
  - "additional"
  - "consolidation"
  - "fields"
  - "domain"
  - "value"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
---
# I_CNSLDTNMDSOURCET

**Master Data Source - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_DomainT.Language as spras preserving type )` | `LANG(1)` | Language Key |
| `AdditionalMasterDataSource` | ✓ | |  | `cast( _DomainT.DomainValue as fincs_md_source preserving type )` | `CHAR(10)` | Master Data Source |
| `MDSourceForConsolidationFields` |  | | `_DomainT` | `DomainValueText` | `CHAR(60)` | Description |
| `DomainValue` |  | | `_DomainT` | `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_MDSource` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNMDSOURCET')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICSMDSOURCET',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
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
  representativeKey: 'AdditionalMasterDataSource',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Master Data Source - Text'

define view I_CnsldtnMDSourceT
  as select from P_CnsldtnDomainText(P_DomainName : 'FINCS_MD_SOURCE') as _DomainT

  association [1..1] to I_CnsldtnMDSource as _MDSource on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_DomainT.Language as spras preserving type )               as Language,

      @ObjectModel.foreignKey.association: '_MDSource'
  key cast( _DomainT.DomainValue as fincs_md_source preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      _DomainT.DomainValueText                                        as MDSourceForConsolidationFields,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      _Language,
      _MDSource
};
```
