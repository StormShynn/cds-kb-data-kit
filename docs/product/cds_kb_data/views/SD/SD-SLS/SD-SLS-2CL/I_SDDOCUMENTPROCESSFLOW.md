---
name: I_SDDOCUMENTPROCESSFLOW
description: "This CDS view provides the prerequisites for answering questions about all relevant aspects of the preceding and the subsequent document for a given SD document. The view considers, for example, the following questions: Which document is the preceding document for my SD document? Which document is the subsequent document for my SD document? Which quantity is referenced from the preceding document? What is the net amount of the preceding document for my SD document?"
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SDDOCUMENTPROCESSFLOW')/$value
semantic_en: "This CDS view provides the prerequisites for answering questions about all relevant aspects of the preceding and the subsequent document for a given SD document. The view considers, for example, the following questions: Which document is the preceding document for my SD document? Which document is the subsequent document for my SD document? Which quantity is referenced from the preceding document? What is the net amount of the preceding document for my SD document?"
tags:
  - SD
  - bo:plant
  - component:SD-SLS-2CL
  - document
  - interface-view
  - lob:sales & distribution
  - SD-SLS
  - SD-SLS-2CL
  - metadata-only
---
# I_SDDOCUMENTPROCESSFLOW

**This CDS view provides the prerequisites for answering questions about all relevant aspects of the preceding and the subsequent document for a given SD document. The view considers, for example, the following questions: Which document is the preceding document for my SD document? Which document is the subsequent document for my SD document? Which quantity is referenced from the preceding document? What is the net amount of the preceding document for my SD document?**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SDDOCUMENTPROCESSFLOW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocRelationshipUUID` |  | |  |  | `RAW(16)` | SD Unique Document Relationship Identification |
| `PrecedingDocument` |  | |  |  | `CHAR(10)` | Preceding sales and distribution document |
| `PrecedingDocumentItem` |  | |  |  | `NUMC(6)` | Preceding Item of an SD Document |
| `PrecedingDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category of Reference SD Document |
| `SubsequentDocument` |  | |  |  | `CHAR(10)` | Subsequent Sales and Distribution Document |
| `SubsequentDocumentItem` |  | |  |  | `NUMC(6)` | Subsequent Item of an SD Document |
| `SubsequentDocumentCategory` |  | |  |  | `CHAR(4)` | Document Category of Subsequent Document |
| `ProcessFlowLevel` |  | |  |  | `NUMC(2)` | Level of the document flow record |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Entry time |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(15)` | Referenced quantity in base unit of measure |
| `RefQuantityInOrdQtyUnitAsFloat` |  | |  |  | `FLTP(16)` | Referenced quantity in sales unit (float) |
| `RefQuantityInBaseUnitAsFloat` |  | |  |  | `FLTP(16)` | Referenced quantity in base unit of measure (float) |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `SDFulfillmentCalculationRule` |  | |  |  | `CHAR(1)` | Quantity is calculated positively, negatively or not at all |
| `NetAmount` |  | |  |  | `CURR(15)` | Reference Value |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Statistics currency |
| `TransferOrderInWrhsMgmtIsConfd` |  | |  |  | `CHAR(1)` | ID: MM-WM Transfer Order Confirmed |
| `WarehouseNumber` |  | |  |  | `CHAR(3)` | Warehouse Number / Warehouse Complex |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `BillingPlan` |  | |  |  | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `BillingPlanItem` |  | |  |  | `NUMC(6)` | Item for billing plan/invoice plan/payment cards |
