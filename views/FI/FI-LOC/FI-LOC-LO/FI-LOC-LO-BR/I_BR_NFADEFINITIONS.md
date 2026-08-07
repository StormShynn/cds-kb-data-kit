---
name: I_BR_NFADEFINITIONS
description: This CDS view provides you the definitions used to identify an electronic single nota fiscal, such as the series range defined for the CNPJ of the Sefaz of a specific region. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADEFINITIONS')/$value
semantic_en: This CDS view provides you the definitions used to identify an electronic single nota fiscal, such as the series range defined for the CNPJ of the Sefaz of a specific region. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Brazil Electronic NFA Definitions — CDS view giao diện dựa trên I_BR_NFASeries.
keywords:
  - brazil
  - electronic
  - nfa
  - definitions
  - region
  - name
  - series
  - range
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_NFADEFINITIONS

**This CDS view provides you the definitions used to identify an electronic single nota fiscal, such as the series range defined for the CNPJ of the Sefaz of a specific region. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADEFINITIONS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Region` | ✓ | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `RegionName` |  | | `_RegionDescription` | `RegionName` | `CHAR(20)` | Description |
| `BR_CNPJ` |  | | `_CNPJOfSEFAZ` | `BR_CNPJ` | `NUMC(14)` | [DEPRECATED] CNPJ Numeric |
| `BR_CNPJ_2` |  | | `_CNPJOfSEFAZ` | `BR_CNPJ_2` | `CHAR(14)` | National Registry of Legal Entities (CNPJ) |
| `BR_NFeSeriesRangeFrom` |  | |  |  | `CHAR(3)` | Initial Series |
| `BR_NFeSeriesRangeTo` |  | |  |  | `CHAR(3)` | Final Series |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CNPJOfSEFAZ` | `I_BR_CNPJOfSEFAZ` | [0..1] |
| `_RegionDescription` | `I_RegionText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADEFINITIONS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADEFINITIONS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBRNFADEFINITION'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Brazil Electronic NFA Definitions'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_NFADefinitions
  as select from I_BR_NFASeries      as NFASeries
  association to I_BR_CNPJOfSEFAZ    as _CNPJOfSEFAZ on _CNPJOfSEFAZ.Region = $projection.Region
  association [0..1] to I_RegionText as _RegionDescription on _RegionDescription.Language    = $session.system_language
                                                              and _RegionDescription.Country = 'BR'
                                                              and _RegionDescription.Region  = $projection.Region
{
  key NFASeries.Region,
      _RegionDescription.RegionName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BR_CNPJ_2'
      @API.element.decommissioningPlannedForYearMonth: '2026-07'
      _CNPJOfSEFAZ.BR_CNPJ,
      _CNPJOfSEFAZ.BR_CNPJ_2,
      NFASeries.BR_NFeSeriesRangeFrom,
      NFASeries.BR_NFeSeriesRangeTo
}
```
