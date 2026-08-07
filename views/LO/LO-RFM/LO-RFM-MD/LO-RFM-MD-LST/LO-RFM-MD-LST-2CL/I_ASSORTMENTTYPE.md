---
name: I_ASSORTMENTTYPE
description: This CDS view provides the details to extract assortment types. This CDS view provides the data to answer the following business questions: How many assortment types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-RFM-MD-LST-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTTYPE')/$value
semantic_en: This CDS view provides the details to extract assortment types. This CDS view provides the data to answer the following business questions: How many assortment types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Assortment Type — CDS view giao diện dựa trên wrfst_typ.
keywords:
  - assortment
  - type
  - dimension1
  - dimension2
  - dimension3
  - asrt
  - asgt
  - layt
  - posbl
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
  - bo:salesorder
---
# I_ASSORTMENTTYPE

**This CDS view provides the details to extract assortment types. This CDS view provides the data to answer the following business questions: How many assortment types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-LST-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssortmentType` | ✓ | |  | `assortyp` | `CHAR(4)` | Assortment Type |
| `AssortmentDimension1` |  | |  | `assordim1` | `CHAR(2)` | Assortment Dimension |
| `AssortmentDimension2` |  | |  | `assordim2` | `CHAR(2)` | Assortment Dimension |
| `AssortmentDimension3` |  | |  | `assordim3` | `CHAR(2)` | Assortment Dimension |
| `AsrtAsgtToLaytMdlIsPosbl` |  | |  | `laygrflg` | `CHAR(1)` | Flag: Assortment Can Be Assigned Layout Module |
| `LaytMdlIsCrtedAutomly` |  | |  | `laygrcrt` | `CHAR(1)` | Flag: Create Layout Module Automatically |
| `LaytMdlIsNotRdyForInpt` |  | |  | `laygrmode` | `CHAR(1)` | Indicator: Field Layout Module Not Ready for Input |
| `_AssortmntDimension1` | | ✓ | | | | |
| `_AssortmntDimension2` | | ✓ | | | | |
| `_AssortmntDimension3` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AssortmntDimension1` | `I_AssortmentDimension` | [0..1] |
| `_AssortmntDimension2` | `I_AssortmentDimension` | [0..1] |
| `_AssortmntDimension3` | `I_AssortmentDimension` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTTYPE')/$value)*

```abap
//Assortment Types
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'AssortmentType'
@ObjectModel:{
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [  #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION  ],
usageType.serviceQuality: #A,
usageType.sizeCategory: #S,
usageType.dataClass: #MASTER
}
@EndUserText.label: 'Assortment Type'
// For Data Extraction
@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations:true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
//View Entity Creation
define view entity I_AssortmentType
  as select from wrfst_typ
  association [0..1] to I_AssortmentDimension as _AssortmntDimension1 on $projection.AssortmentDimension1 = _AssortmntDimension1.AssortmentDimension
  association [0..1] to I_AssortmentDimension as _AssortmntDimension2 on $projection.AssortmentDimension2 = _AssortmntDimension2.AssortmentDimension
  association [0..1] to I_AssortmentDimension as _AssortmntDimension3 on $projection.AssortmentDimension3 = _AssortmntDimension3.AssortmentDimension
{
  key assortyp  as AssortmentType,
      @ObjectModel.foreignKey.association: '_AssortmntDimension1'
      assordim1 as AssortmentDimension1,
      @ObjectModel.foreignKey.association: '_AssortmntDimension2'
      assordim2 as AssortmentDimension2,
      @ObjectModel.foreignKey.association: '_AssortmntDimension3'
      assordim3 as AssortmentDimension3,
      laygrflg  as AsrtAsgtToLaytMdlIsPosbl,
      laygrcrt  as LaytMdlIsCrtedAutomly,
      laygrmode as LaytMdlIsNotRdyForInpt,


      //Expose Association
      _AssortmntDimension1,
      _AssortmntDimension2,
      _AssortmntDimension3
}
```
