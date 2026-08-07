---
name: I_BR_REINFSERVICECODE
description: This CDS view provides you with a list of the available service codes for the Brazilian EFD-REINF. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_REINFSERVICECODE')/$value
semantic_en: This CDS view provides you with a list of the available service codes for the Brazilian EFD-REINF. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Brazil EFD REINF Service Code — CDS view giao diện dựa trên logbr_reinf.
keywords:
  - brazil
  - efd
  - reinf
  - service
  - code
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
# I_BR_REINFSERVICECODE

**This CDS view provides you with a list of the available service codes for the Brazilian EFD-REINF. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_REINFSERVICECODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_EFDREINFServiceCode` | ✓ | |  | `reinf` | `CHAR(9)` | EFD-REINF Service Type Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_REINFServiceCodeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_REINFSERVICECODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_REINFSERVICECODE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBRREINFCODE'
@EndUserText.label: 'Brazil EFD REINF Service Code'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BR_EFDREINFServiceCode'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #B
@AbapCatalog.preserveKey:true

define view I_BR_REINFServiceCode
  as select from logbr_reinf as REINFServiceCode
  association [0..*] to I_BR_REINFServiceCodeText as _Text on $projection.BR_EFDREINFServiceCode = _Text.BR_EFDREINFServiceCode
{
      @ObjectModel.text.association: '_Text'
  key REINFServiceCode.reinf as BR_EFDREINFServiceCode,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
```
