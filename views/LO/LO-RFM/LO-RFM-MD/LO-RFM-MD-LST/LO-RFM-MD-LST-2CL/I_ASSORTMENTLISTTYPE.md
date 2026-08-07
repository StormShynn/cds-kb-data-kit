---
name: I_ASSORTMENTLISTTYPE
description: "This CDS view helps to retrieve the type of assortment list that controls the chronological supply of material data to the assortment list. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-LST-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPE')/$value
semantic_en: "This CDS view helps to retrieve the type of assortment list that controls the chronological supply of material data to the assortment list. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Assortment List Type — CDS view giao diện dựa trên twbb."
keywords:
  - "assortment"
  - "list"
  - "type"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-LST-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-LST
  - LO-RFM-MD-LST-2CL
  - lob:logistics general
  - material
  - bo:salesorder
---
# I_ASSORTMENTLISTTYPE

**This CDS view helps to retrieve the type of assortment list that controls the chronological supply of material data to the assortment list. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-LST-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssortmentListType` | ✓ | |  | `cast(bbtyp as assortmentlisttype preserving type)` | `CHAR(1)` | Assortment List Type |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IASSORTLISTTYPE'
@EndUserText.label: 'Assortment List Type'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {
    supportedCapabilities:[#VALUE_HELP_PROVIDER],
    compositionRoot: true,
    representativeKey: 'AssortmentListType',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_AssortmentListType
  as select from twbb
  composition [0..*] of I_AssortmentListTypeT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(bbtyp as assortmentlisttype preserving type) as AssortmentListType,

      _Text
}
```
