---
name: C_PURORDOUTPUTAUTOMNCUBE
description: "Purordoutputautomncube"
semantic_vi: "View C_PURORDOUTPUTAUTOMNCUBE hiển thị dữ liệu đầu ra của đơn đặt hàng mua hàng, cung cấp thông tin về hiệu suất nhà cung cấp và phân tích mua sắm."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "supplier performance"
  - "procurement analytics"
  - "mm-pur-ana"
  - "sourcing & procurement"
  - "sap mm"
semantic_en: "The C_PURORDOUTPUTAUTOMNCUBE view exposes purchase order output data, providing insights into supplier performance and procurement analytics."
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - analytical
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURORDOUTPUTAUTOMNCUBE

**Purordoutputautomncube**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `POOutputMessageItemID` | ✓ | |  |  |  |  |
| `POOutputChannel` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `CalendarYear` |  | |  |  |  |  |
| `CalendarQuarter` |  | |  |  |  |  |
| `CalendarMonth` |  | |  |  |  |  |
| `CalendarWeek` |  | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `POOutputChannelManualUniqueID` |  | |  |  |  |  |
| `POOutputChannelAutomnUniqueID` |  | |  |  |  |  |
| `PurchaseOrderOutputIsAutomated` |  | |  |  |  |  |
| `NmbrOfPurchaseOrdersPrinted` |  | |  |  |  |  |
| `NmbrOfPurchaseOrdersEmailed` |  | |  |  |  |  |
| `NmbrOfPurOrdersOutputAsXML` |  | |  |  |  |  |
| `NmbrOfPurOrdersOutputAsIDOC` |  | |  |  |  |  |
| `NmbrOfPurOrdersOutputAsEDI` |  | |  |  |  |  |
| `NmbrOfPurOrdsWithAutomnOutput` |  | |  | `cast(1 as abap.int4 )` |  |  |
| `NmbrOfPurOrdsWithNonAutomnOutp` |  | |  | `cast( 1 as abap.int4 )` |  |  |
| `NmbrOfPOOutputItems` |  | |  | `cast( 1 as abap.int4 )` |  |  |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_OutputType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `Calendar` | `I_CalendarDate` | [1..1] |
| `_OutputType` | `I_POChannelOutputType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMPOOPAUCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.internalName:#LOCAL
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.viewType: #CONSUMPTION
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Header details of Output Messages'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations:true
define view C_PurOrdOutputAutomnCube
  with parameters
    P_StartDate       : vdm_validitystart ,
    P_EndDate         :  vdm_validityend 
  as select from    P_PurOrdOutputAutomation2( P_StartDate:$parameters.P_StartDate , P_EndDate: $parameters.P_EndDate) as Automation

  association [1..1] to I_PurchasingOrganization as _PurchasingOrganization on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_PurchasingGroup        as _PurchasingGroup        on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup

  association [1..1] to I_Supplier               as _Supplier               on $projection.Supplier = _Supplier.Supplier

  association [1..1] to I_CalendarDate           as Calendar                on $projection.PurchaseOrderDate = Calendar.CalendarDate
  
  association [1..1] to I_POChannelOutputType    as _OutputType     on _OutputType.PurchaseOrderOutputIsAutomated = $projection.PurchaseOrderOutputIsAutomated
    
 
{

      key Automation.PurchaseOrder,
      key POOutputMessageItemID,

      Automation.POOutputChannel,

      @ObjectModel.foreignKey.association: '_Supplier'
      @Analytics.internalName:#LOCAL
      Automation.Supplier,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      @Analytics.internalName:#LOCAL
      Automation.PurchasingOrganization,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      @Analytics.internalName:#LOCAL
      Automation.PurchasingGroup,
     // Automation.CreationDate,
     @Semantics.calendar.year: true
      Calendar.CalendarYear,
      Calendar.CalendarQuarter,
      Calendar.CalendarMonth,
      Calendar.CalendarWeek,
     PurchaseOrderDate,
      POOutputChannelManualUniqueID,
      POOutputChannelAutomnUniqueID,
     
      @EndUserText.label: 'Automation Type'
      @ObjectModel.foreignKey.association: '_OutputType'
      @Semantics.booleanIndicator 
      PurchaseOrderOutputIsAutomated,
      @DefaultAggregation: #SUM
      NmbrOfPurchaseOrdersPrinted,
      @DefaultAggregation: #SUM
      NmbrOfPurchaseOrdersEmailed,
      @DefaultAggregation: #SUM
      NmbrOfPurOrdersOutputAsXML,
      @DefaultAggregation: #SUM
      NmbrOfPurOrdersOutputAsIDOC,
      @DefaultAggregation: #SUM
      NmbrOfPurOrdersOutputAsEDI,
 
      @Aggregation.referenceElement: ['POOutputChannelAutomnUniqueID']
      @Aggregation.default: #COUNT_DISTINCT 
      cast(1 as abap.int4 )  as  NmbrOfPurOrdsWithAutomnOutput,
      @Aggregation.referenceElement: ['POOutputChannelManualUniqueID']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as abap.int4 ) as NmbrOfPurOrdsWithNonAutomnOutp,
      @Aggregation.referenceElement: ['PurchaseOrder']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as abap.int4 )               as NmbrOfPOOutputItems,
      _PurchasingOrganization,
      _PurchasingGroup,
      _OutputType,
      _Supplier

}
```
