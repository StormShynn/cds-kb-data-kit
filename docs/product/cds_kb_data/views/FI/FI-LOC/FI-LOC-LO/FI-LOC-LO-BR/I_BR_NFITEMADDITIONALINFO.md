---
name: I_BR_NFITEMADDITIONALINFO
description: "This CDS view displays the content of the free usage field for item additional information. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFITEMADDITIONALINFO')/$value
semantic_en: "This CDS view displays the content of the free usage field for item additional information. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Brazil Nota Fiscal Item Additional Info — CDS view giao diện dựa trên j_1bnfadd_inflin."
keywords:
  - "brazil"
  - "nota"
  - "fiscal"
  - "item"
  - "additional"
  - "info"
  - "field"
  - "usage"
  - "information"
  - "desc"
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
# I_BR_NFITEMADDITIONALINFO

**This CDS view displays the content of the free usage field for item additional information. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFITEMADDITIONALINFO')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` | `NUMC(10)` | Document Number |
| `BR_NotaFiscalItem` | ✓ | |  | `itmnum` | `NUMC(6)` | Document Item Number |
| `BR_NFInfoFieldUsage` | ✓ | |  | `inf_usage` | `CHAR(1)` | Usage |
| `BR_NFAdditionalInformationID` |  | |  | `cast(xcampo as logbr_fieldname preserving type)` | `CHAR(20)` | Field ID |
| `BR_NFAdditionalInfoDesc` |  | |  | `xtexto` | `CHAR(60)` | Field Content |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFITEMADDITIONALINFO')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFITEMADDITIONALINFO')/$value)*

```abap
@EndUserText.label: 'Brazil Nota Fiscal Item Additional Info'
@AbapCatalog.sqlViewName: 'IBRNFITMADDINFO'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
define view I_BR_NFItemAdditionalInfo as 
  select from j_1bnfadd_inflin {
  key docnum as BR_NotaFiscal,
  key itmnum as BR_NotaFiscalItem,
  key inf_usage as BR_NFInfoFieldUsage,
  cast(xcampo as logbr_fieldname preserving type) as BR_NFAdditionalInformationID,
  xtexto as BR_NFAdditionalInfoDesc
}
```
