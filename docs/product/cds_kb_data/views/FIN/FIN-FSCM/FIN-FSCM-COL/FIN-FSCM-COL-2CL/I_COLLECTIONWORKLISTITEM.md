---
name: I_COLLECTIONWORKLISTITEM
description: "This CDS view provides information about collection worklist items, which are part of the process in SAP Collections Management. It aggregates various attributes related to collection activities, such as the collection specialist, group, segment, strategy, and financial details, enabling efficient management and analysis of collection tasks. This CDS view provides the data to answer the following business questions: Who is the collection specialist responsible for a particular worklist item? What is the status and strategy associated with a collection worklist item? What is the creation date of a worklist item and its associated collection run? What is the valuation percentage of a worklist item? What is the collectable amount for a specific worklist item? Which business partner is associated with a collection worklist item? What are the currency details related to the collection amounts? How can collection activities be segmented and grouped for better management? What are the results of customer contact efforts in the collection process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONWORKLISTITEM')/$value
semantic_en: "This CDS view provides information about collection worklist items, which are part of the process in SAP Collections Management. It aggregates various attributes related to collection activities, such as the collection specialist, group, segment, strategy, and financial details, enabling efficient management and analysis of collection tasks. This CDS view provides the data to answer the following business questions: Who is the collection specialist responsible for a particular worklist item? What is the status and strategy associated with a collection worklist item? What is the creation date of a worklist item and its associated collection run? What is the valuation percentage of a worklist item? What is the collectable amount for a specific worklist item? Which business partner is associated with a collection worklist item? What are the currency details related to the collection amounts? How can collection activities be segmented and grouped for better management? What are the results of customer contact efforts in the collection process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Collection Worklist Item — CDS view giao diện dựa trên udm_wl_item."
keywords:
  - "collection"
  - "worklist"
  - "item"
  - "specialist"
  - "group"
  - "segment"
  - "creation"
  - "date"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - task
---
# I_COLLECTIONWORKLISTITEM

**This CDS view provides information about collection worklist items, which are part of the process in SAP Collections Management. It aggregates various attributes related to collection activities, such as the collection specialist, group, segment, strategy, and financial details, enabling efficient management and analysis of collection tasks. This CDS view provides the data to answer the following business questions: Who is the collection specialist responsible for a particular worklist item? What is the status and strategy associated with a collection worklist item? What is the creation date of a worklist item and its associated collection run? What is the valuation percentage of a worklist item? What is the collectable amount for a specific worklist item? Which business partner is associated with a collection worklist item? What are the currency details related to the collection amounts? How can collection activities be segmented and grouped for better management? What are the results of customer contact efforts in the collection process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONWORKLISTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionWorklistItemUUID` | ✓ | |  | `workitem_id` | `RAW(16)` | Key of Worklist Item |
| `CollectionSpecialist` |  | |  | `cast( coll_specialist as bdm_coll_specialist preserving type )` | `CHAR(12)` | Collection Specialist |
| `CollectionGroup` |  | |  | `cast( coll_group as udm_coll_group preserving type )` | `CHAR(10)` | Collection Group |
| `CollectionSegment` |  | |  | `cast( coll_segment as farp_collection_segment preserving type )` | `CHAR(10)` | Collection Segment |
| `WorklistItemCreationDate` |  | |  | `cast( wl_item_date as udm_worklist_item_date )` | `DATS(8)` | Date of Worklist Item |
| `CollectionWorklistRun` |  | |  | `cast( run_id as udm_coll_run_id preserving type )` | `CHAR(12)` | Run ID |
| `Status` |  | |  | `cast( status as udm_worklist_item_status preserving type )` | `CHAR(1)` | Indicator: Worklist Item Is Completed |
| `CollectionStrategy` |  | |  | `cast( strategy as udm_coll_strategy preserving type )` | `CHAR(10)` | Collection Strategy |
| `CollectionsStrategyVersion` |  | |  | `cast( strategy_version as udm_strategy_version preserving type )` | `NUMC(8)` | Collection Strategy Version |
| `WorklistItemValuationPercent` |  | |  | `cast( percentage as udm_valuation_by_percentage preserving type )` | `NUMC(4)` | Percentage Valuation |
| `BusinessPartner` |  | |  | `partner_id` | `CHAR(10)` | Business Partner Number |
| `CustomerContactResult` |  | |  | `cast( cct_result as udm_cct_result_id preserving type )` | `CHAR(3)` | Result of Customer Contact |
| `CollectableAmount` |  | |  | `cast( amt_collected as udm_amount_to_be_collected preserving type )` | `CURR(15)` | Amount to Be Collected |
| `Currency` |  | |  | `cast( currency as udm_coll_strategy_currency preserving type )` | `CUKY(5)` | Strategy Currency |
| `_CollectionGroup` | | ✓ | | | | |
| `_CollectionSegment` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_CollectionsStrategy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollectionGroup` | `I_CollectionGroup` | [0..1] |
| `_CollectionSegment` | `I_CollectionSegment` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_User` | `I_User` | [0..1] |
| `_CollectionsStrategy` | `I_CollectionsStrategy` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONWORKLISTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONWORKLISTITEM')/$value)*

```abap
@EndUserText.label: 'Collection Worklist Item'
@AbapCatalog.sqlViewName: 'ICOLLWLITEM'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'CollectionWorklistItemUUID'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name: 'CollectionsWorklistItem'
@ObjectModel: { supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#SQL_DATA_SOURCE ] }
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
        }
define view I_CollectionWorklistItem
  as select from udm_wl_item

  association [0..1] to I_CollectionGroup     as _CollectionGroup     on $projection.CollectionGroup = _CollectionGroup.CollectionGroup
  association [0..1] to I_CollectionSegment   as _CollectionSegment   on $projection.CollectionSegment = _CollectionSegment.CollectionSegment
  //association [0..*] to I_CollectionPriority as _Priority on CollectionPriority = _Priority.Priority
  association [0..1] to I_Currency            as _Currency            on $projection.Currency = _Currency.Currency
  association [0..1] to I_User                as _User                on $projection.CollectionSpecialist = _User.UserID
  association [0..1] to I_CollectionsStrategy as _CollectionsStrategy on $projection.CollectionStrategy = _CollectionsStrategy.CollectionStrategy

{
  key workitem_id                                                         as CollectionWorklistItemUUID,
      cast( coll_specialist as bdm_coll_specialist preserving type )      as CollectionSpecialist,
      @ObjectModel.foreignKey.association: '_CollectionGroup'
      cast( coll_group as  udm_coll_group preserving type )               as CollectionGroup,
      @ObjectModel.foreignKey.association: '_CollectionSegment'
      cast( coll_segment as farp_collection_segment preserving type )     as CollectionSegment,
      cast( wl_item_date as udm_worklist_item_date )                      as WorklistItemCreationDate,
      cast( run_id as udm_coll_run_id preserving type )                   as CollectionWorklistRun,
      cast( status as udm_worklist_item_status preserving type )          as Status,
      cast( strategy as udm_coll_strategy preserving type )               as CollectionStrategy,
      cast( strategy_version as udm_strategy_version preserving type )    as CollectionsStrategyVersion,
      //   ,cast( valuation as  UDM_COLL_VALUATION ) as  Valuation

      cast( percentage as udm_valuation_by_percentage preserving type )   as WorklistItemValuationPercent,
      //   ,cast( max_sequence_id as UDM_SEQUENCE_ID ) as  MAX_SEQUENCE_ID

      partner_id                                                          as BusinessPartner,
      //   ,cast( partner_desc as BU_DESCRIP ) as  PARTNER_DESC
      //   ,cast( partner_accno as UDM_KUNNR ) as  PARTNER_ACCNO
      //   ,cast( partner_augrp as BU_AUGRP ) as  PARTNER_AUGRP
      //   ,cast( contact_name as UDM_LAST_CONTACT_DESC ) as CONTACT_NAME
      //   ,cast( contact_phone as UDM_COLL_CONTACT_PHONE ) as CONTACT_PHONE

      cast( cct_result as udm_cct_result_id preserving type )             as CustomerContactResult,
      //   ,cast( last_cct_time as UDM_LAST_CCT_TIME ) as  LAST_CCT_TIME
      //   ,cast( calltimefrom as UDM_CALLTIMEFROM ) as  CALLTIMEFROM
      //   ,cast( calltimeto as UDM_CALLTIMETO ) as  CALLTIMETO
      //   ,cast( visitingtimefrom as  UDM_VISITINGTIMEFROM ) as VISITINGTIMEFROM
      //   ,cast( visitingtimeto as UDM_VISITINGTIMETO ) as VISITINGTIMETO
      //   ,cast( total_amt as UDM_AMOUNT_TOTAL ) as  TOTAL_AMT
      //   ,cast( debit_amt as UDM_AMOUNT_DEBIT ) as  DEBIT_AMT
      //   ,cast( credit_amt as UDM_AMOUNT_CREDIT ) as  CREDIT_AMT

      @Semantics.amount.currencyCode: 'Currency'
      cast( amt_collected as udm_amount_to_be_collected preserving type ) as CollectableAmount,
      //   ,cast( due_amt as UDM_AMOUNT_DUE ) as  DUE_AMT
      //   ,cast( overdue_amt as UDM_AMOUNT_OVERDUE ) as  OVERDUE_AMT
      //   ,cast( promised_amt as UDM_AMOUNT_TOTAL_PROMISED ) as  PROMISED_AMT
      ////   ,cast( disputed_amt as UDM_AMOUNT_DISPUTED ) as  DISPUTED_AMT
      //   ,cast( dunned_amt as UDM_AMOUNT_TOTAL_DUNNED ) as DUNNED_AMT
      //   ,cast( arranged_amt as  UDM_AMOUNT_ARRANGED ) as ARRANGED_AMT
      //   ,cast( broken_amt as  UDM_AMOUNT_BROKEN ) as BROKEN_AMT

      cast( currency  as  udm_coll_strategy_currency preserving type )    as Currency,
      //   ,cast( due_amt_int1 as UDM_AMOUNT_INTERVAL ) as DUE_AMT_INT1
      //   ,cast( due_amt_int2 as  UDM_AMOUNT_INTERVAL ) as DUE_AMT_INT2
      //   ,cast( due_amt_int3 as UDM_AMOUNT_INTERVAL ) as DUE_AMT_INT3
      //   ,cast( due_amt_int4 as UDM_AMOUNT_INTERVAL ) as DUE_AMT_INT4
      //   ,cast( due_amt_int5 as UDM_AMOUNT_INTERVAL ) as DUE_AMT_INT5
      //   ,cast( overdue_amt_int1 as UDM_AMOUNT_INTERVAL ) as OVERDUE_AMT_INT1
      //   ,cast( overdue_amt_int2 as UDM_AMOUNT_INTERVAL ) as OVERDUE_AMT_INT2
      //   ,cast( overdue_amt_int3 as UDM_AMOUNT_INTERVAL ) as OVERDUE_AMT_INT3
      //   ,cast( overdue_amt_int4 as UDM_AMOUNT_INTERVAL ) as OVERDUE_AMT_INT4
      //   ,cast( overdue_amt_int5 as UDM_AMOUNT_INTERVAL ) as OVERDUE_AMT_INT5
      //   ,cast( last_pay_date as BDM_LAST_PAYMENT_DATE ) as LAST_PAY_DATE
      //   ,cast( rsm_date as BDM_RSM_DATE ) as RSM_DATE
      //   ,cast( rsm_time as BDM_RSM_TIME ) as RSM_TIME
      //   ,cast( rsm_reason as UDM_RSM_REASON_ID ) as RSM_REASON
      //   ,cast( max_dunnlevel as UDM_MAX_DUNN_LEVEL ) as MAX_DUNNLEVEL
      //   ,cast( last_dunndate as BDM_LAST_DUNN_DATE ) as LAST_DUNNDATE
      //   ,cast( credit_sgmnt as UKM_CREDIT_SGMNT ) as  CREDIT_SGMNT
      //   ,cast( credit_limit  as  UKM_CREDIT_LIMIT ) as CREDIT_LIMIT
      //   ,cast( credit_rating  as UKM_OWN_RATING ) as CREDIT_RATING
      //   ,cast( credit_exposure as UDM_CREDLIMIT_USED ) as CREDIT_EXPOSURE
      //   ,cast( credit_risk_cls as  UDM_RISK_CLASS ) as CREDIT_RISK_CLS
      //   ,cast( grade as UDM_GRADE ) as GRADE
      //   ,cast( grade_method  as  UDM_GRADE_METHOD ) as GRADE_METHOD
      //   ,cast( grade_valid_to as UDM_GRADE_VALID_TO ) as GRADE_VALID_TO
      //   ,cast( created_by as SCMG_CREATE_USER ) as CREATED_BY
      //   ,cast( create_time as  SCMG_CREATE_TIME ) as CREATE_TIME
      //   ,cast( changed_by as  SCMG_CHANGE_USER ) as CHANGED_BY
      //   ,cast( change_time as SCMG_CHANGE_TIME ) as CHANGE_TIME
      //   ,cast( head_office as UDM_WL_HEAD_OFFICE ) as HEAD_OFFICE
      //   ,cast( xambig_ho  as  UDM_XAMBIG_HO ) as XAMBIG_HO
      //   ,cast( global_eval as  UDM_GLOBAL_EVAL ) as GLOBAL_EVAL

      _CollectionGroup,
      _CollectionSegment,
      _Currency,
      _User,
      _CollectionsStrategy
}
```
