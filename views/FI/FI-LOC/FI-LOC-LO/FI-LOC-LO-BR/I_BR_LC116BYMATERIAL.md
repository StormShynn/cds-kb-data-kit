---
name: I_BR_LC116BYMATERIAL
description: "This CDS view provides you a list of the determination of the service code by material for the complementary law 116. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116BYMATERIAL')/$value
semantic_en: "This CDS view provides you a list of the determination of the service code by material for the complementary law 116. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Brazil LC116 Determination by Material — CDS view giao diện dựa trên logbr_abrasf_det."
keywords:
  - "brazil"
  - "lc116"
  - "determination"
  - "material"
  - "c116"
  - "service"
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
  - material
---
# I_BR_LC116BYMATERIAL

**This CDS view provides you a list of the determination of the service code by material for the complementary law 116. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116BYMATERIAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  | `material` | `CHAR(40)` | Material Number |
| `BR_LC116ServiceCode` |  | |  | `abrasf` | `CHAR(5)` | LC 116 Service Type Code |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116BYMATERIAL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_LC116BYMATERIAL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBRLC116BYMATNR'
@EndUserText.label: 'Brazil LC116 Determination by Material'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'Material'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true 

define view I_BR_LC116ByMaterial as select from logbr_abrasf_det as LC116ByMaterial
{
  key material     as Material,
      abrasf       as BR_LC116ServiceCode
}
```
