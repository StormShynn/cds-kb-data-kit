---
name: I_ACCTGSRVCDOCUMENTITEMBASIC
description: "Acctgsrvcdocumentitembasic"
semantic_vi: "Chỉ ra dữ liệu cơ bản của các mục trong tài liệu dịch vụ, bao gồm loại tài liệu dịch vụ, tài liệu và chi tiết mục, thường được sử dụng cho mục đích quản lý và quản lý dịch vụ."
keywords:
  - "service document item"
  - "tài liệu dịch vụ"
  - "đối tượng dịch vụ"
  - "đơn dịch vụ"
  - "đối tượng tài liệu"
  - "đối tượng mục"
  - "quản lý dịch vụ"
  - "quản lý tài liệu"
  - "co-pc"
  - "co-pc-obj"
  - "lob: controlling"
semantic_en: "Exposes basic data of service document items, including service document type, document, and item details, typically used for controlling and service management purposes."
app_component: CO-PC-OBJ-SRV-2CL
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
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - document
  - item-level
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCTGSRVCDOCUMENTITEMBASIC

**Acctgsrvcdocumentitembasic**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-SRV-2CL` |
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
| `ServiceDocumentType` | ✓ | | `_AcctgServiceDocument` | `ServiceDocumentType` |  |  |
| `ServiceDocument` | ✓ | | `_AcctgServiceDocument` | `ServiceDocument` |  |  |
| `ServiceDocumentItem` | ✓ | | `_AcctgServiceDocument` | `ServiceDocumentItem` |  |  |
| `ControllingObject` |  | | `_AcctgServiceDocument` | `ControllingObject` |  |  |
| `BusinessSolutionOrder` |  | | `_AcctgServiceDocument` | `BusinessSolutionOrder` |  |  |
| `CompanyCode` |  | | `_AcctgServiceDocument` | `CompanyCode` |  |  |
| `ControllingArea` |  | | `_AcctgServiceDocument` | `ControllingArea` |  |  |
| `ProfitCenter` |  | | `_AcctgServiceDocument` | `ProfitCenter` |  |  |
| `FunctionalArea` |  | | `_AcctgServiceDocument` | `FunctionalArea` |  |  |
| `SalesOrganization` |  | | `_AcctgServiceDocument` | `SalesOrganization` |  |  |
| `DistributionChannel` |  | | `_AcctgServiceDocument` | `DistributionChannel` |  |  |
| `Division` |  | | `_AcctgServiceDocument` | `Division` |  |  |
| `ResultAnalysisInternalID` |  | | `_AcctgServiceDocument` | `ResultAnalysisInternalID` |  |  |
| `Currency` |  | | `_AcctgServiceDocument` | `Currency` |  |  |
| `CostingSheet` |  | | `_AcctgServiceDocument` | `CostingSheet` |  |  |
| `ServiceObjectType` |  | | `_AcctgServiceDocument` | `ServiceObjectType` |  |  |
| `ServiceDocumentItemDescription` |  | |  | `cast( case _AcctgServiceDocument.ServiceDocumentItemDescription when '' then _ServiceDocumentItem.ServiceDocumentItemDescription else coalesce( _AcctgServiceDocument.ServiceDocumentItemDescription, _ServiceDocumentItem.ServiceDocumentItemDescription ) end as fco_srvdoc_item_description preserving type )` |  |  |
| `ServiceDocumentUUID` |  | | `_ServiceDocumentItem` | `ServiceDocumentUUID` |  |  |
| `ServiceDocumentDescription` |  | | `_ServiceDocumentItem` | `ServiceDocumentDescription` |  |  |
| `ServiceDocumentItemUUID` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemUUID` |  |  |
| `ServiceDocumentItemObjectType` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemObjectType` |  |  |
| `ParentServiceDocumentItemUUID` |  | | `_ServiceDocumentItem` | `ParentServiceDocumentItemUUID` |  |  |
| `RefBusinessSolutionOrder` |  | | `_ServiceDocumentItem` | `RefBusinessSolutionOrder` |  |  |
| `RefBusinessSolutionOrderItem` |  | | `_ServiceDocumentItem` | `RefBusinessSolutionOrderItem` |  |  |
| `BillingDateTime` |  | | `_ServiceDocumentItem` | `BillingDateTime` |  |  |
| `BillingDocCreationDateTime` |  | | `_ServiceDocumentItem` | `BillingDocCreationDateTime` |  |  |
| `PurchaseOrderByCustomer` |  | | `_ServiceDocumentItem` | `PurchaseOrderByCustomer` |  |  |
| `ServiceDocumentItemPriority` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemPriority` |  |  |
| `PostingDate` |  | | `_ServiceDocumentItem` | `PostingDate` |  |  |
| `TransactionCurrency` |  | | `_ServiceDocumentItem` | `TransactionCurrency` |  |  |
| `SalesOrganizationOrgUnitID` |  | | `_ServiceDocumentItem` | `SalesOrganizationOrgUnitID` |  |  |
| `SalesOfficeOrgUnitID` |  | | `_ServiceDocumentItem` | `SalesOfficeOrgUnitID` |  |  |
| `SalesGroupOrgUnitID` |  | | `_ServiceDocumentItem` | `SalesGroupOrgUnitID` |  |  |
| `SoldToPartyCountry` |  | | `_ServiceDocumentItem` | `SoldToPartyCountry` |  |  |
| `SoldToPartyRegion` |  | | `_ServiceDocumentItem` | `SoldToPartyRegion` |  |  |
| `SoldToParty` |  | | `_ServiceDocumentItem` | `SoldToParty` |  |  |
| `ServiceTeam` |  | | `_ServiceDocumentItem` | `ServiceTeam` |  |  |
| `ResponsibleEmployee` |  | |  | `cast( _ServiceDocument.ResponsibleEmployee as resp_empl)` |  |  |
| `ServiceEmployee` |  | | `_ServiceDocumentItem` | `ServiceEmployee` |  |  |
| `ContactPerson` |  | |  | `cast( _ServiceDocument.ContactPerson as parnr )` |  |  |
| `PayerParty` |  | | `_ServiceDocumentItem` | `PayerParty` |  |  |
| `BillToParty` |  | | `_ServiceDocumentItem` | `BillToParty` |  |  |
| `PaymentTerms` |  | | `_ServiceDocumentItem` | `PaymentTerms` |  |  |
| `ServiceDocumentItemStatus` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemStatus` |  |  |
| `ServiceDocumentItemHasError` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemHasError` |  |  |
| `SrvcDocItmIsReleasedForBilling` |  | | `_ServiceDocumentItem` | `SrvcDocItmIsReleasedForBilling` |  |  |
| `ServiceDocItemBillingStatus` |  | | `_ServiceDocumentItem` | `ServiceDocItemBillingStatus` |  |  |
| `ServiceDocumentItemIsOpen` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemIsOpen` |  |  |
| `ServiceOrganization` |  | | `_ServiceDocumentItem` | `ServiceOrganization` |  |  |
| `ResponsibleServiceOrganization` |  | | `_ServiceDocumentItem` | `ResponsibleServiceOrganization` |  |  |
| `ServiceDocItemCreationDateTime` |  | | `_ServiceDocumentItem` | `ServiceDocItemCreationDateTime` |  |  |
| `ServiceDocItemChangedDateTime` |  | | `_ServiceDocumentItem` | `ServiceDocItemChangedDateTime` |  |  |
| `ServiceDocItemCreationDate` |  | |  | `cast( tstmp_to_dats( _ServiceDocumentItem.ServiceDocItemCreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` |  |  |
| `ServiceDocItemChangedDate` |  | |  | `cast( tstmp_to_dats( _ServiceDocumentItem.ServiceDocItemChangedDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` |  |  |
| `ServiceDocItemCreatedByUser` |  | | `_ServiceDocumentItem` | `ServiceDocItemCreatedByUser` |  |  |
| `ServiceDocItemChangedByUser` |  | | `_ServiceDocumentItem` | `ServiceDocItemChangedByUser` |  |  |
| `OriginallyRequestedProduct` |  | | `_ServiceDocumentItem` | `OriginallyRequestedProduct` |  |  |
| `ServiceDocumentItemQuantity` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemQuantity` |  |  |
| `ServiceDocItemQuantityUnit` |  | | `_ServiceDocumentItem` | `ServiceDocItemQuantityUnit` |  |  |
| `SrvcDocItemBaseQuantityUnit` |  | | `_ServiceDocumentItem` | `SrvcDocItemBaseQuantityUnit` |  |  |
| `ServiceDocItemCategory` |  | | `_ServiceDocumentItem` | `ServiceDocItemCategory` |  |  |
| `ServiceDocumentItemNetAmount` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemNetAmount` |  |  |
| `BillableControl` |  | | `_ServiceDocumentItem` | `BillableControl` |  |  |
| `BillingBlockReason` |  | | `_ServiceDocumentItem` | `BillingBlockReason` |  |  |
| `RequestedServiceStartDateTime` |  | | `_ServiceDocumentItem` | `RequestedServiceStartDateTime` |  |  |
| `RequestedServiceEndDateTime` |  | | `_ServiceDocumentItem` | `RequestedServiceEndDateTime` |  |  |
| `ServiceContrItemStartDateTime` |  | | `_ServiceDocumentItem` | `ServiceContrItemStartDateTime` |  |  |
| `ServiceContrItemEndDateTime` |  | | `_ServiceDocumentItem` | `ServiceContrItemEndDateTime` |  |  |
| `ServiceDocItemGrossAmount` |  | | `_ServiceDocumentItem` | `ServiceDocItemGrossAmount` |  |  |
| `SettlementPeriodRuleUUID` |  | | `_ServiceDocumentItem` | `SettlementPeriodRuleUUID` |  |  |
| `BillingPlanBillingDateRuleUUID` |  | | `_ServiceDocumentItem` | `BillingPlanBillingDateRuleUUID` |  |  |
| `SalesOffice` |  | | `_ServiceDocumentItem` | `SalesOffice` |  |  |
| `SalesGroup` |  | | `_ServiceDocumentItem` | `SalesGroup` |  |  |
| `ServiceDuration` |  | | `_ServiceDocumentItem` | `ServiceDuration` |  |  |
| `ServiceDocItemRejectionReason` |  | | `_ServiceDocumentItem` | `ServiceDocItemRejectionReason` |  |  |
| `ShipToParty` |  | | `_ServiceDocumentItem` | `ShipToParty` |  |  |
| `ServiceDocumentItemIsReleased` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemIsReleased` |  |  |
| `ServiceDocumentItemIsRejected` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemIsRejected` |  |  |
| `ResponseProfile` |  | | `_ServiceDocumentItem` | `ResponseProfile` |  |  |
| `ServiceProfile` |  | | `_ServiceDocumentItem` | `ServiceProfile` |  |  |
| `Language` |  | | `_ServiceDocumentItem` | `Language` |  |  |
| `ActualServiceDuration` |  | | `_ServiceDocumentItem` | `ActualServiceDuration` |  |  |
| `ActualServiceDurationUnit` |  | | `_ServiceDocumentItem` | `ActualServiceDurationUnit` |  |  |
| `ServiceDurationUnit` |  | | `_ServiceDocumentItem` | `ServiceDurationUnit` |  |  |
| `TimeSheetOvertimeCategory` |  | | `_ServiceDocumentItem` | `TimeSheetOvertimeCategory` |  |  |
| `Industry` |  | | `_ServiceDocumentItem` | `Industry` |  |  |
| `SrvcContrItemRnwlDuration` |  | | `_ServiceDocumentItem` | `SrvcContrItemRnwlDuration` |  |  |
| `SrvcContrItemRnwlDurationUnit` |  | | `_ServiceDocumentItem` | `SrvcContrItemRnwlDurationUnit` |  |  |
| `SrvcContrItemExtensionDuration` |  | | `_ServiceDocumentItem` | `SrvcContrItemExtensionDuration` |  |  |
| `SrvcContrItemExtnDurationUnit` |  | | `_ServiceDocumentItem` | `SrvcContrItemExtnDurationUnit` |  |  |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentType` | `I_AcctgServiceDocumentType` | [1..1] |
| `_ServiceDocument` | `I_AccountingServiceDocument` | [1..1] |
| `_ServiceDocumentItem` | `I_ServiceDocumentItem` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{
  sizeCategory: #L,
  serviceQuality: #C,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.representativeKey: 'ServiceDocumentItem'
@ObjectModel.supportedCapabilities: 
  [ #SQL_DATA_SOURCE, 
    #CDS_MODELING_DATA_SOURCE, 
    #CDS_MODELING_ASSOCIATION_TARGET, 
    #VALUE_HELP_PROVIDER
  ]
@EndUserText.label: 'Accounting Service Document Item'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_AcctgSrvcDocumentItemBasic 
  as select from I_AcctgServiceDocumentItem as _AcctgServiceDocument
//  as select from P_AcctgServiceDocument as _AcctgServiceDocument
//    left outer to one join I_AcctgServiceDocumentItem as _ServiceObjType on _AcctgServiceDocument.ServiceDocumentType  = _ServiceObjType.ServiceDocumentType
//                                                                         and _AcctgServiceDocument.ServiceDocument     = _ServiceObjType.ServiceDocument
//                                                                         and _AcctgServiceDocument.ServiceDocumentItem = _ServiceObjType.ServiceDocumentItem


  association [1..1] to I_AcctgServiceDocumentType  as _ServiceDocumentType on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
  
  association [1..1] to I_AccountingServiceDocument as _ServiceDocument     on  $projection.ServiceDocumentType = _ServiceDocument.ServiceDocumentType
                                                                            and $projection.ServiceDocument     = _ServiceDocument.ServiceDocument
                                                                            
  association [1..1] to I_ServiceDocumentItem       as _ServiceDocumentItem on  $projection.ServiceObjectType = _ServiceDocumentItem.ServiceObjectType
                                                                            and $projection.ServiceDocument     = _ServiceDocumentItem.ServiceDocument
                                                                            and $projection.ServiceDocumentItem = _ServiceDocumentItem.ServiceDocumentItem
                                                                                                                                                   
{
  @ObjectModel.foreignKey.association: '_ServiceDocumentType'
  key _AcctgServiceDocument.ServiceDocumentType,
  @ObjectModel.foreignKey.association: '_ServiceDocument'
  key _AcctgServiceDocument.ServiceDocument,
  @ObjectModel.text.element: ['ServiceDocumentItemDescription']
  key _AcctgServiceDocument.ServiceDocumentItem,
      _AcctgServiceDocument.ControllingObject,
      _AcctgServiceDocument.BusinessSolutionOrder,
      _AcctgServiceDocument.CompanyCode,
      _AcctgServiceDocument.ControllingArea,
      _AcctgServiceDocument.ProfitCenter,
      _AcctgServiceDocument.FunctionalArea,
      _AcctgServiceDocument.SalesOrganization,
      _AcctgServiceDocument.DistributionChannel,
      _AcctgServiceDocument.Division,
      _AcctgServiceDocument.ResultAnalysisInternalID,
      _AcctgServiceDocument.Currency,
      _AcctgServiceDocument.CostingSheet,
      
//      _ServiceObjType.ServiceObjectType as ServiceObjectType,
      _AcctgServiceDocument.ServiceObjectType,
      
      @Semantics.text: true
      cast( case _AcctgServiceDocument.ServiceDocumentItemDescription
              when '' then _ServiceDocumentItem.ServiceDocumentItemDescription 
              else coalesce( _AcctgServiceDocument.ServiceDocumentItemDescription, _ServiceDocumentItem.ServiceDocumentItemDescription  )
            end 
          as fco_srvdoc_item_description preserving type ) as ServiceDocumentItemDescription,
      
      
      _ServiceDocumentItem.ServiceDocumentUUID,
      _ServiceDocumentItem.ServiceDocumentDescription,
      _ServiceDocumentItem.ServiceDocumentItemUUID,
      _ServiceDocumentItem.ServiceDocumentItemObjectType,
      _ServiceDocumentItem.ParentServiceDocumentItemUUID,
      _ServiceDocumentItem.RefBusinessSolutionOrder,
      _ServiceDocumentItem.RefBusinessSolutionOrderItem,

      _ServiceDocumentItem.BillingDateTime,
      _ServiceDocumentItem.BillingDocCreationDateTime,

      _ServiceDocumentItem.PurchaseOrderByCustomer,
      _ServiceDocumentItem.ServiceDocumentItemPriority,
      _ServiceDocumentItem.PostingDate,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      _ServiceDocumentItem.TransactionCurrency,

      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      _ServiceDocumentItem.SalesOrganizationOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      _ServiceDocumentItem.SalesOfficeOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      _ServiceDocumentItem.SalesGroupOrgUnitID,

      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      _ServiceDocumentItem.SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      _ServiceDocumentItem.SoldToPartyRegion,

      @ObjectModel.foreignKey.association: '_SoldToParty'
      _ServiceDocumentItem.SoldToParty,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      _ServiceDocumentItem.ServiceTeam,
//      @ObjectModel.foreignKey.association: '_RespEmployee'
      cast( _ServiceDocument.ResponsibleEmployee as resp_empl) as ResponsibleEmployee,
//      _ServiceDocument.ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      _ServiceDocumentItem.ServiceEmployee,
//      @ObjectModel.foreignKey.association: '_ContactPerson'
     cast( _ServiceDocument.ContactPerson as parnr ) as ContactPerson,
//      _ServiceDocument.ContactPerson,
      @ObjectModel.foreignKey.association: '_PayerParty'
      _ServiceDocumentItem.PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      _ServiceDocumentItem.BillToParty,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      _ServiceDocumentItem.PaymentTerms,

      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      _ServiceDocumentItem.ServiceDocumentItemStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocItemHasError'
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemHasError,
      @ObjectModel.foreignKey.association: '_SrvcDocItemIsRelForBillgSts'
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.SrvcDocItmIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocItemBillingStatus'
      _ServiceDocumentItem.ServiceDocItemBillingStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemIsOpen,

      _ServiceDocumentItem.ServiceOrganization,
      _ServiceDocumentItem.ResponsibleServiceOrganization,

      _ServiceDocumentItem.ServiceDocItemCreationDateTime,
      _ServiceDocumentItem.ServiceDocItemChangedDateTime,

      @Semantics.systemDate.createdAt: true
      cast( tstmp_to_dats( _ServiceDocumentItem.ServiceDocItemCreationDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_created_on preserving type ) as ServiceDocItemCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( tstmp_to_dats( _ServiceDocumentItem.ServiceDocItemChangedDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_changed_on preserving type ) as ServiceDocItemChangedDate,

      _ServiceDocumentItem.ServiceDocItemCreatedByUser,
      _ServiceDocumentItem.ServiceDocItemChangedByUser,
      _ServiceDocumentItem.OriginallyRequestedProduct,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      _ServiceDocumentItem.ServiceDocumentItemQuantity,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      _ServiceDocumentItem.ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      _ServiceDocumentItem.SrvcDocItemBaseQuantityUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      _ServiceDocumentItem.ServiceDocItemCategory,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocumentItem.ServiceDocumentItemNetAmount,
      _ServiceDocumentItem.BillableControl,
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      _ServiceDocumentItem.BillingBlockReason,
      _ServiceDocumentItem.RequestedServiceStartDateTime,
      _ServiceDocumentItem.RequestedServiceEndDateTime,

      _ServiceDocumentItem.ServiceContrItemStartDateTime,
      _ServiceDocumentItem.ServiceContrItemEndDateTime,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocumentItem.ServiceDocItemGrossAmount,

      _ServiceDocumentItem.SettlementPeriodRuleUUID,
      _ServiceDocumentItem.BillingPlanBillingDateRuleUUID,

      @ObjectModel.foreignKey.association: '_SalesOffice'
      _ServiceDocumentItem.SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      _ServiceDocumentItem.SalesGroup,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      _ServiceDocumentItem.ServiceDuration,
      @ObjectModel.foreignKey.association: '_ServiceDocItemRejectionReason'
      _ServiceDocumentItem.ServiceDocItemRejectionReason,
      _ServiceDocumentItem.ShipToParty,
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemIsReleased,
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemIsRejected,
      _ServiceDocumentItem.ResponseProfile,
      _ServiceDocumentItem.ServiceProfile,
      _ServiceDocumentItem.Language,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      _ServiceDocumentItem.ActualServiceDuration,
      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      _ServiceDocumentItem.ActualServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDurationUnit'
      _ServiceDocumentItem.ServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      _ServiceDocumentItem.TimeSheetOvertimeCategory,
      @ObjectModel.foreignKey.association: '_Industry'
      _ServiceDocumentItem.Industry,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      _ServiceDocumentItem.SrvcContrItemRnwlDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemRnwlDurationUnit'
      _ServiceDocumentItem.SrvcContrItemRnwlDurationUnit,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      _ServiceDocumentItem.SrvcContrItemExtensionDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemExtnDurationUnit'
      _ServiceDocumentItem.SrvcContrItemExtnDurationUnit,

//      /* Associations */
//      //I_ServiceDocumentItem
      _ServiceDocumentItem._BillingBlockReason,
//      _ServiceDocumentItem._BillingRequestItem,
      _ServiceDocumentItem._BillToParty,
//      _ServiceDocumentItem._ContactPerson,
      _ServiceDocumentItem._PayerParty,
//      _ServiceDocumentItem._RespEmployee,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._ServiceDocItemBillingStatus,
      _ServiceDocumentItem._ServiceDocItemCategory,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._ServiceDocItemHasError,
//      _ServiceDocumentItem._ServiceDocItemPriority,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._SrvcDocItmLifecycleStatus,
      _ServiceDocumentItem._ServiceEmployee,
//      _ServiceDocument,
//      _ServiceObjType,
      _ServiceDocumentItem._BaseUnit_2,
      _ServiceDocumentItem._SalesUnit,
      _ServiceDocumentItem._TransactionCurrency,
      _ServiceDocumentItem._PaymentTerms,
//      _ServiceProductList,
      _ServiceDocumentItem._ServiceTeam,
      _ServiceDocumentItem._SoldToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._SrvcDocItemIsRelForBillgSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._ServiceDocumentIsOpen,
//      _FixedPrice,
//      _StatusObjItemStatus,
//      _SalesOrganization,
      _ServiceDocumentItem._SalesOffice,
      _ServiceDocumentItem._SalesGroup,
      _ServiceDocumentItem._ActualServiceDurationUnit,
      _ServiceDocumentItem._ServiceDurationUnit,
      _ServiceDocumentItem._SrvcContrItemRnwlDurationUnit,
      _ServiceDocumentItem._SrvcContrItemExtnDurationUnit,
      _ServiceDocumentItem._ServiceDocOvertimeCat,
      _ServiceDocumentItem._Industry,
      _ServiceDocumentItem._ServiceDocItemRejectionReason,
      _ServiceDocumentItem._SoldToPartyCountry,
      _ServiceDocumentItem._SoldToPartyRegion,
//
//
      _ServiceDocumentItem._SalesOrganizationOrgUnit_2,
      _ServiceDocumentItem._SalesOfficeOrgUnit_2,
      _ServiceDocumentItem._SalesGroupOrgUnit_2,      
      
      _ServiceDocumentType,
      _ServiceDocument,
      _ServiceDocumentItem
      
}
```
