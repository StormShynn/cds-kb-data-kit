---
name: C_PURINFORECORDDOCUMENTCHANGES
description: "Purinforecorddocumentchanges"
semantic_vi: "View C_PURINFORECORDDOCUMENTCHANGES hiển thị dữ liệu lịch sử thay đổi của đơn mua hàng, có thể được sử dụng để phân tích và theo dõi các thay đổi được thực hiện trên đơn mua hàng theo thời gian."
keywords:
  - "purchase document"
  - "đơn mua hàng"
  - "purchase order"
  - "đơn đặt hàng mua"
  - "change history"
  - "lịch sử thay đổi"
  - "purchase document change"
  - "thay đổi đơn mua hàng"
  - "sap mm"
  - "mm-pur"
  - "mm-pur-ana"
  - "sourcing & procurement"
semantic_en: "The C_PURINFORECORDDOCUMENTCHANGES view exposes purchase document change history data, which can be used to analyze and track changes made to purchase documents over time."
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
  - document
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURINFORECORDDOCUMENTCHANGES

**Purinforecorddocumentchanges**

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
| `name:'C_GregorianCalDateFuncVH'` |  | |  |  |  |  |
| `element:'DateFunction'` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMPIRDOCCHNG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.serviceQuality:  #B
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType.dataClass : #MASTER
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Info Record Document Changes'
define view C_PurInfoRecordDocumentChanges 
  with parameters    
    @Consumption.defaultValue: 'PREVIOUS30DAYS'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction    : datefunctionid,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_StartDate       : vdm_validitystart,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_EndDate         : vdm_validityend

  as select from    P_PurInfoRecordDocumentChanges(  P_StartDate: $parameters.P_StartDate, P_EndDate: $parameters.P_EndDate ) as PRIChanges

{
  key ChangeDocObject,
  key ChangeDocument,
  key DatabaseTable,
  key ChangeDocTableKey,
  key ChangeDocDatabaseTableField,

      //  key ChangeDocItemChangeType,

      ChangeDocPreviousUnit,
      ChangeDocNewUnit,
      ChangeDocPreviousCurrency,
      ChangeDocNewCurrency,
      ChangeDocNewFieldValue,
      ChangeDocPreviousFieldValue,
      ChangeDocTextIsChanged,

      CreatedByUser,
      CreationDate,
      CreationTime,
      ChangeTransactionCode,
      ChangeDocChangeType,
      
      // Added for DCL
      ChangeDocObjectClass 
}
```
