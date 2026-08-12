---
name: I_BR_LC116SERVICECODE
description: "This CDS view provides you with a list of the available service codes for the Brazilian complementary law 116. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116SERVICECODE')/$value
semantic_en: "This CDS view provides you with a list of the available service codes for the Brazilian complementary law 116. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Brazil LC116 Service Codes — CDS view giao diện dựa trên logbr_abrasf."
keywords:
  - "brazil"
  - "lc116"
  - "service"
  - "codes"
  - "c116"
  - "code"
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
# I_BR_LC116SERVICECODE

**This CDS view provides you with a list of the available service codes for the Brazilian complementary law 116. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116SERVICECODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_LC116ServiceCode` | ✓ | | `_BR_LC116ServiceCode` | `abrasf` | `CHAR(5)` | LC 116 Service Type Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_LC116ServiceCodeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116SERVICECODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116SERVICECODE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBRLC116CODE'
@EndUserText.label: 'Brazil LC116 Service Codes'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BR_LC116ServiceCode'
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

define view I_BR_LC116ServiceCode as select from logbr_abrasf as _BR_LC116ServiceCode
    association [0..*] to I_BR_LC116ServiceCodeText as _Text on $projection.BR_LC116ServiceCode = _Text.BR_LC116ServiceCode
{
  @ObjectModel.text.association: '_Text'
  key _BR_LC116ServiceCode.abrasf as BR_LC116ServiceCode,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
```
