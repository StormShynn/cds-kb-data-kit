---
name: C_CHANGERECORDORDERBOMDEX
description: "Change Record Sales Order BOM Extraction"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDORDERBOMDEX')/$value
semantic_en: "Change Record Sales Order BOM Extraction"
semantic_vi: "Change Record Sales Order BOM Extraction — CDS view tiêu dùng dựa trên I_ChangeRecordItem."
keywords:
  - "change"
  - "record"
  - "sales"
  - "order"
  - "bom"
  - "extraction"
  - "reference"
tags:
  - PLM
  - component:PLM-CR-2CL
  - consumption-view
  - order
  - PLM-CR
  - PLM-CR-2CL
  - sales-order
---
# C_CHANGERECORDORDERBOMDEX

**Change Record Sales Order BOM Extraction**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDORDERBOMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordReferenceUUID` | ✓ | |  |  | `RAW(16)` | DB Key |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDORDERBOMDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDORDERBOMDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Change Record Sales Order BOM Extraction'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecordRefOrderBOM'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_FACT
@Analytics:{
    internalName: #LOCAL,
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:[
            {
              table:'/PLMI/CHGREC_OBM', role: #MAIN,
              viewElement: ['ChangeRecordReferenceUUID'],
              tableElement: [ 'DB_KEY']
             }
           ]
        }
    }
}
define view entity C_ChangeRecordOrderBOMDEX as select from I_ChangeRecordItem
//  as select from I_ChangeRecordOrderBOMDetail
{
  key ChangeRecordReferenceUUID
//      Material,
//      Plant,
//      BillOfMaterial,
//      BillOfMaterialVariantUsage,
//      BillOfMaterialVariant,
//      SalesOrder,
//      SalesOrderItem,
//      ChangeRecordUUID,
//      BillOfMaterialCategory
}
```
