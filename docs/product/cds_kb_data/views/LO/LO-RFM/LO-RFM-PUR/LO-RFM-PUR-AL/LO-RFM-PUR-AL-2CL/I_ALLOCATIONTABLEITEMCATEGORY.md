---
name: I_ALLOCATIONTABLEITEMCATEGORY
description: "This CDS view provides the details to extract data of allocation table item categories. This CDS view provides the data to answer the following business questions: How many item categories for allocation tables are available? How many goods recipient of supplier purchase order is available for allocation table item category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-PUR-AL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCATIONTABLEITEMCATEGORY')/$value
semantic_en: "This CDS view provides the details to extract data of allocation table item categories. This CDS view provides the data to answer the following business questions: How many item categories for allocation tables are available? How many goods recipient of supplier purchase order is available for allocation table item category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Allocation Item Category — CDS view giao diện dựa trên t621."
keywords:
  - "allocation"
  - "item"
  - "category"
  - "alloc"
  - "table"
  - "name"
  - "rcpnt"
  - "transf"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-PUR-AL-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-PUR
  - LO-RFM-PUR-AL
  - LO-RFM-PUR-AL-2CL
  - lob:logistics general
  - order
  - purchase-order
  - supplier
---
# I_ALLOCATIONTABLEITEMCATEGORY

**This CDS view provides the details to extract data of allocation table item categories. This CDS view provides the data to answer the following business questions: How many item categories for allocation tables are available? How many goods recipient of supplier purchase order is available for allocation table item category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-PUR-AL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCATIONTABLEITEMCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AllocTableItemCategoryName` | ✓ | |  | `cast(apstp as apstp preserving type)` | `CHAR(4)` | Item category of allocation table |
| `AllocTblItmPurOrdGdsRcpnt` |  | |  | `bstge` | `CHAR(1)` | Goods Recipient of Supplier Purchase Order |
| `AllocTblItmStkTransfDocCat` |  | |  | `umlge` | `CHAR(1)` | Stock Transfer From DC to Recipients |
| `_AllocTblItmPurOrdGdsRcpnt` | | ✓ | | | | |
| `_AllocTblItmStkTransfDocCat` | | ✓ | | | | |
| `_ItemCatAllocText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AllocTblItmPurOrdGdsRcpnt` | `I_AllocTblItmPurOrdGdsRcpnt` | [0..1] |
| `_AllocTblItmStkTransfDocCat` | `I_AllocTblItmStkTransfDocCat` | [0..1] |
| `_ItemCatAllocText` | `I_AllocTblItmCatTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCATIONTABLEITEMCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCATIONTABLEITEMCATEGORY')/$value)*

```abap
//Item Categories for Allocation Tables
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'AllocTableItemCategoryName'
@EndUserText.label: 'Allocation Item Category'
@ObjectModel.sapObjectNodeType.name: 'AllocationTable'
@Analytics.technicalName              : 'IALLOCITMCATEGRY'
@Analytics.internalName:#LOCAL
//Usage type
@ObjectModel:{
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [  #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE, 
                            #ANALYTICAL_DIMENSION  ],
                                 
   usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #MASTER
        }
 }
 
 // For Data Extraction
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



define view entity I_AllocationTableItemCategory
  as select from t621
  association [0..1] to I_AllocTblItmPurOrdGdsRcpnt  as _AllocTblItmPurOrdGdsRcpnt  on $projection.AllocTblItmPurOrdGdsRcpnt = _AllocTblItmPurOrdGdsRcpnt.AllocTblItmPurOrdGdsRcpnt
  association [0..1] to I_AllocTblItmStkTransfDocCat as _AllocTblItmStkTransfDocCat on $projection.AllocTblItmStkTransfDocCat = _AllocTblItmStkTransfDocCat.AllocTblItmStkTransfDocCat
  association [0..*] to I_AllocTblItmCatTxt          as _ItemCatAllocText           on $projection.AllocTableItemCategoryName = _ItemCatAllocText.AllocTableItemCategoryName
{
      @ObjectModel.text.association:'_ItemCatAllocText'
  key cast(apstp as apstp preserving type) as AllocTableItemCategoryName, //AllocTableItemCategoryName,
      @ObjectModel.foreignKey.association:'_AllocTblItmPurOrdGdsRcpnt'
      bstge                                as AllocTblItmPurOrdGdsRcpnt,
      @ObjectModel.foreignKey.association: '_AllocTblItmStkTransfDocCat'
      umlge                                as AllocTblItmStkTransfDocCat, //StockTranferDC,


      //Expose Association
      _ItemCatAllocText,
      _AllocTblItmPurOrdGdsRcpnt,
      _AllocTblItmStkTransfDocCat
}
```
