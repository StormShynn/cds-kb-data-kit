---
name: I_BR_NFFUELORIGININDICATOR
description: This CDS view displays the fuel composition and origin indication for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUELORIGININDICATOR')/$value
semantic_en: This CDS view displays the fuel composition and origin indication for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Brazil Nota Fiscal Fuel Origin Indicator — CDS view giao diện dựa trên j_1bnffuelorigin.
keywords:
  - brazil
  - nota
  - fiscal
  - fuel
  - origin
  - indicator
  - item
  - import
  - region
  - originating
  - percent
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
# I_BR_NFFUELORIGININDICATOR

**This CDS view displays the fuel composition and origin indication for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUELORIGININDICATOR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` | `NUMC(10)` | Document Number |
| `BR_NotaFiscalItem` | ✓ | |  | `itmnum` | `NUMC(6)` | Document Item Number |
| `BR_NFImportIndicatorFuelOrigin` | ✓ | |  | `cast(ind_import as logbr_importindfuelorigin preserving type )` | `CHAR(1)` | Fuel Origin Import Indicator |
| `BR_NFOriginRegion` | ✓ | |  | `cast(c_uf_origin as logbr_fueloriginuf preserving type )` | `CHAR(3)` | Origin UF of producer or importer |
| `BR_NFRegionOriginatingPercent` |  | |  | `cast(p_orig as logbr_fueloriginpercentage preserving type )` | `DEC(7)` | Originating percentage for the UF |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUELORIGININDICATOR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUELORIGININDICATOR')/$value)*

```abap
@EndUserText.label: 'Brazil Nota Fiscal Fuel Origin Indicator'
@AbapCatalog.sqlViewName: 'IBRNFFUELORIGIN'
@AbapCatalog.compiler.compareFilter: true
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
define view I_BR_NFFuelOriginIndicator as 
  select from j_1bnffuelorigin {
    key docnum as BR_NotaFiscal,
    key itmnum as BR_NotaFiscalItem,
    key cast(ind_import as logbr_importindfuelorigin preserving type ) as BR_NFImportIndicatorFuelOrigin,
    key cast(c_uf_origin as logbr_fueloriginuf preserving type ) as BR_NFOriginRegion,
    cast(p_orig as logbr_fueloriginpercentage preserving type ) as BR_NFRegionOriginatingPercent
}
```
