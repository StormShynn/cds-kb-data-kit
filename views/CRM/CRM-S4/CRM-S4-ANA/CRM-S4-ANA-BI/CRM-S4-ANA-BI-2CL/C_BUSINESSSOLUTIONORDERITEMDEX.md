---
name: C_BUSINESSSOLUTIONORDERITEMDEX
description: Businesssolutionorderitemdex
app_component: CRM-S4-ANA-BI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - consumption-view
  - data-extraction
  - item-level
  - component:CRM-S4-ANA-BI-2CL
  - lob:Other
---
# C_BUSINESSSOLUTIONORDERITEMDEX

**Businesssolutionorderitemdex**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-BI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  |  |
| `ServiceDocument` | ✓ | |  |  |
| `ServiceDocumentItem` | ✓ | |  |  |
| `ServiceDocumentUUID` |  | |  |  |
| `ServiceDocumentCharUUID` |  | |  |  |
| `ServiceDocumentDescription` |  | |  |  |
| `ServiceDocNetAmount` |  | |  | `} SolutionOrder.ServiceDocNetAmount` |
| `PurchaseOrderByCustomer` |  | |  |  |
| `ServiceDocumentStatus` |  | |  |  |
| `ServiceDocumentIsReleased` |  | |  |  |
| `ServiceDocumentIsOpen` |  | |  |  |
| `ServiceDocumentHasError` |  | |  |  |
| `ServiceDocumentIsRejected` |  | |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |
| `ServiceDocumentType` |  | |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |
| `ServiceDocumentItemUUID` |  | |  |  |
| `ServiceDocumentItemCharUUID` |  | |  |  |
| `PostingDate` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `ProfitCenterDeterminationDate` |  | |  |  |
| `ParentServiceDocumentItemUUID` |  | |  |  |
| `ServiceDocItemCategory` |  | |  |  |
| `OriginallyRequestedProduct` |  | |  |  |
| `ProductID` |  | |  | `Product` |
| `ServiceDocumentItemQuantity` |  | |  | `} SolutionOrderItem.ServiceDocumentItemQuantity` |
| `SrvcDocItmOrdToBaseQtyNmrtr` |  | |  |  |
| `SrvcDocItmOrdToBaseQtyDnmntr` |  | |  |  |
| `OrderToBaseQuantityExponent` |  | |  |  |
| `ServiceDocItemQuantityUnit` |  | |  |  |
| `SrvcDocItemBaseQuantityUnit` |  | |  |  |
| `Plant` |  | |  |  |
| `IncotermsPart1` |  | |  |  |
| `IncotermsPart2` |  | |  |  |
| `DeliveryPriority` |  | |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |
| `DeliveryBlockReason` |  | |  |  |
| `RequestedDeliveryUTCDateTime` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `ServiceTeam` |  | |  |  |
| `SoldToPartyCountry` |  | |  |  |
| `SoldToPartyRegion` |  | |  |  |
| `ResponsibleEmployee` |  | |  | `cast( SolutionOrderItem.ResponsibleEmployee as resp_empl )` |
| `ContactPerson` |  | |  | `cast( SolutionOrderItem.ContactPerson as parnr )` |
| `ShipToParty` |  | |  |  |
| `BillToParty` |  | |  |  |
| `PayerParty` |  | |  |  |
| `ProjectManager` |  | |  | `CustMgmtBusinessPartner` |
| `BillableControl` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `ReferenceCurrency` |  | |  | `StatisticsCurrency` |
| `ExchangeRateType` |  | |  |  |
| `ExchangeRateDate` |  | |  |  |
| `AccountingExchangeRate` |  | |  | `cast( SolutionOrderItem.AccountingExchangeRate as fis_exchange_rate preserving type )` |
| `CustomerGroup` |  | |  |  |
| `PaymentTerms` |  | |  |  |
| `BillingBlockReason` |  | |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |
| `ServiceDocItemRejectionReason` |  | |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `Division` |  | |  |  |
| `ServiceOrganization` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `SalesGroup` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `ServiceDocumentItemStatus` |  | |  |  |
| `ServiceDocumentItemIsReleased` |  | |  |  |
| `ServiceDocumentItemHasError` |  | |  |  |
| `SrvcDocItmDeliveryStatus` |  | |  |  |
| `ServiceDocItemBillingStatus` |  | |  |  |
| `ServiceDocumentItemIsRejected` |  | |  |  |
| `ServiceDocumentItemIsOpen` |  | |  |  |
| `SrvcDocItemCreditStatus` |  | |  |  |
| `ServiceDocumentItemNetAmount` |  | |  | `} SolutionOrderItem.ServiceDocumentItemNetAmount` |
| `ServiceDocItemGrossAmount` |  | |  | `} SolutionOrderItem.ServiceDocItemGrossAmount` |
| `SrvcMaterialPricingGroup` |  | |  |  |
| `ProductGroup1` |  | |  |  |
| `ProductGroup2` |  | |  |  |
| `ProductGroup3` |  | |  |  |
| `ProductGroup4` |  | |  |  |
| `ProductGroup5` |  | |  |  |
| `ProductHierarchy` |  | |  | `cast( SolutionOrderItem.ProductHierarchy as prodh_d )` |
| `SrvcRefObjIsMainObject` |  | |  |  |
| `ProductUUID` |  | |  |  |
| `SerialNumber` |  | |  |  |
| `Equipment` |  | |  |  |
| `ServiceRefObjectSequenceNumber` |  | |  |  |
| `ServiceReferenceObjectType` |  | |  |  |
| `ServiceReferenceObjectUUID` |  | |  |  |
| `FunctionalLocation` |  | |  | `cast( SolutionOrdItemRefObj.FunctionalLocation as vdm_eam_tplnr )` |
| `ProjectStartDate` |  | |  | `tstmp_to_dats( SolutionDocumentProjStart.SrvcDocApptStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |
| `ProjectEndDate` |  | |  | `tstmp_to_dats( SolutionDocumentProjEnd.SrvcDocApptStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |
| `ResponsibleCostCenter` |  | |  |  |
| `EnterpriseProjectServiceOrg` |  | |  |  |
| `ServiceContrItemStartDateTime` |  | |  | `cast( SolutionOrderItem.ServiceContrItemStartDateTime as sc_tstfro )` |
| `ServiceContrItemEndDateTime` |  | |  | `cast( SolutionOrderItem.ServiceContrItemEndDateTime as sc_tstto )` |
| `SubscrpnBillgItmPrcgDateTime` |  | |  | `SrvcDocApptStartDateTime` |
| `SubscrpnWithdrawalPeriod` |  | |  | `SrvcDocDurationValue` |
| `SubscriptionFixedTerm` |  | |  | `SrvcDocDurationValue` |
| `SubscriptionTermOfNotice` |  | |  | `SrvcDocDurationValue` |
| `SubscriptionMinimumTerm` |  | |  | `SrvcDocDurationValue` |
| `SubscriptionRenewalPeriod` |  | |  | `SrvcDocDurationValue` |
| `SubscriptionExpectedTerm` |  | |  | `SrvcDocDurationValue` |
| `MidBillgCycExprtnIsAllowed` |  | |  |  |
| `SubscrpnContrTrmsAreSpecified` |  | |  |  |
| `SubscriptionBillingCycle` |  | |  |  |
| `SubscrpnBillgRatePlanCharUUID` |  | |  |  |
| `ProjectUUID` |  | |  |  |
| `ProjectInternalID` |  | |  |  |
| `_ServiceObjType` | | ✓ | | |
| `_ServiceDocument` | | ✓ | | |
| `_BaseUnit_2` | | ✓ | | |
| `_SalesUnit` | | ✓ | | |
| `_TransactionCurrency` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SolutionDocItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_SolutionDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Data Extraction for Bussiness Solution Order'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'CBSOLORDITMDEX',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #CONSUMPTION,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                   filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000172'}],
                    table: 'crms4d_serv_i', role: #MAIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument', 'ServiceDocumentItem'],
                    tableElement: ['objtype_h', 'object_id', 'number_int']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000172'}],
                    table: 'crms4d_serv_h', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument'],
                    tableElement: ['objtype_h', 'object_id']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000172'}],
                    table: 'crms4d_refobj', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument','ServiceDocumentItem','ServiceRefObjectSequenceNumber'],
                    tableElement: ['objtype_h', 'object_id','number_int','counter']
                }
            ]
        }
    }
 }

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  representativeKey: 'ServiceDocumentItem',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XL
   },
   supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
   modelingPattern: #NONE
}
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrderItem'
@Metadata.ignorePropagatedAnnotations: true

/*

  Business Solution Order Extractor
  Note:
    1. Solution Order Items along with some Header fields are projected
    2. BW extracts all projected fields and performance is not relevant


*/

define view C_BusinessSolutionOrderItemDEX
  as select from           I_ServiceDocumentItemEnhcd    as SolutionOrderItem
    left outer to one join I_ServiceDocumentEnhcd        as SolutionOrder              on  SolutionOrder.ServiceObjectType     = 'BUS2000172'
                                                                                       and SolutionOrderItem.ServiceObjectType = 'BUS2000172'
                                                                                       and SolutionOrderItem.ServiceDocument   = SolutionOrder.ServiceDocument

    left outer to one join I_ServiceDocumentRefObject    as SolutionOrdItemRefObj      on  SolutionOrdItemRefObj.ServiceObjectType      = 'BUS2000172'
                                                                                       and SolutionOrdItemRefObj.ServiceDocument        = SolutionOrderItem.ServiceDocument
                                                                                       and SolutionOrdItemRefObj.ServiceDocumentItem    = SolutionOrderItem.ServiceDocumentItem
                                                                                       and SolutionOrdItemRefObj.SrvcRefObjIsMainObject = 'X'
  
    left outer to one join I_CustMgmtPartner             as SolutionCustmMgmtPartner   on  SolutionOrderItem.ServiceDocument                     = SolutionCustmMgmtPartner.CustMgmtDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem                 = SolutionCustmMgmtPartner.CustMgmtDocumentItem
                                                                                       and SolutionCustmMgmtPartner.CustMgmtObjectType           = 'BUS2000172'
                                                                                       and SolutionCustmMgmtPartner.CustMgmtPartFunctionCategory = '0093'

    left outer to one join I_SrvcDocAppointment          as SolutionDocumentProjStart  on  SolutionOrderItem.ServiceDocumentItemUUID        = SolutionDocumentProjStart.SrvcMgmtObjectUUID
                                                                                       and SolutionDocumentProjStart.SrvcDocAppointmentType = 'PROJSTART'

    left outer to one join I_SrvcDocAppointment          as SolutionDocumentProjEnd    on  SolutionOrderItem.ServiceDocumentItemUUID      = SolutionDocumentProjEnd.SrvcMgmtObjectUUID
                                                                                       and SolutionDocumentProjEnd.SrvcDocAppointmentType = 'PROJEND'

    left outer to one join I_SrvcDocAppointment          as SolutionSubsPrcgDate       on  SolutionOrderItem.ServiceDocumentItemUUID   = SolutionSubsPrcgDate.SrvcMgmtObjectUUID
                                                                                       and SolutionSubsPrcgDate.SrvcDocAppointmentType = 'SUBS_PRIC_DT'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsWitPer on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsWitPer.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsWitPer.ServiceDocumentItem
                                                                                       and SolutionDurationSubsWitPer.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsWitPer.SrvcDocDurationType = 'SUBS_WIT_PER'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsFixTer on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsFixTer.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsFixTer.ServiceDocumentItem
                                                                                       and SolutionDurationSubsFixTer.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsFixTer.SrvcDocDurationType = 'SUBS_FIX_TER'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsTerNot on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsTerNot.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsTerNot.ServiceDocumentItem
                                                                                       and SolutionDurationSubsTerNot.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsTerNot.SrvcDocDurationType = 'SUBS_TER_NOT'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsMinTer on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsMinTer.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsMinTer.ServiceDocumentItem
                                                                                       and SolutionDurationSubsMinTer.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsMinTer.SrvcDocDurationType = 'SUBS_MIN_TER'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsRenTer on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsRenTer.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsRenTer.ServiceDocumentItem
                                                                                       and SolutionDurationSubsRenTer.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsRenTer.SrvcDocDurationType = 'SUBS_REN_TER'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsDefTer on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsDefTer.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsDefTer.ServiceDocumentItem
                                                                                       and SolutionDurationSubsDefTer.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsDefTer.SrvcDocDurationType = 'SUBS_DEF_TER'

    left outer to one join I_SalesOrganization           as SolutionSalesOrganization  on SolutionOrderItem.SalesOrganization = SolutionSalesOrganization.SalesOrganization



  /* Enhancement Solution Order */
    left outer to one join I_EntProjBusSolutionOrderLink as SolutionOrderProjLink      on  SolutionOrderProjLink.BusinessSolutionOrder     = SolutionOrderItem.ServiceDocument
                                                                                       and SolutionOrderProjLink.BusinessSolutionOrderItem = SolutionOrderItem.ServiceDocumentItem




  association [0..1] to E_ServiceDocumentItem as _SolutionDocItemExt  on  $projection.ServiceObjectType   = _SolutionDocItemExt.ServiceCategory
                                                                      and $projection.ServiceDocument     = _SolutionDocItemExt.ServiceOrderItem
                                                                      and $projection.ServiceDocumentItem = _SolutionDocItemExt.ServiceLineExternalID

  association [0..1] to E_ServiceDocument     as _SolutionDocumentExt on  $projection.ServiceObjectType = _SolutionDocumentExt.ServiceCategory
                                                                      and $projection.ServiceDocument   = _SolutionDocumentExt.ServiceOrder

{

      /* Solution Order Item Keys  */
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key SolutionOrderItem.ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key SolutionOrderItem.ServiceDocument,

  key SolutionOrderItem.ServiceDocumentItem,


      /* Header Details */
      SolutionOrder.ServiceDocumentUUID,
      @Semantics.uuid
      SolutionOrder.ServiceDocumentCharUUID,
      SolutionOrder.ServiceDocumentDescription,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SolutionOrder.ServiceDocNetAmount,
      SolutionOrder.PurchaseOrderByCustomer,
      SolutionOrder.ServiceDocumentStatus,
      @Semantics.booleanIndicator: true
      SolutionOrder.ServiceDocumentIsReleased,
      @Semantics.booleanIndicator: true
      SolutionOrder.ServiceDocumentIsOpen,
      @Semantics.booleanIndicator: true
      SolutionOrder.ServiceDocumentHasError,
      @Semantics.booleanIndicator: true
      SolutionOrder.ServiceDocumentIsRejected,
      SolutionOrder.ServiceDocChangedDateTime,
      SolutionOrder.ServiceDocCreationDateTime,

      /* Item Details */
      SolutionOrderItem.ServiceDocumentType,
      SolutionOrderItem.ServiceDocumentItemObjectType,
      SolutionOrderItem.ServiceDocumentItemUUID,
      @Semantics.uuid
      SolutionOrderItem.ServiceDocumentItemCharUUID,
      SolutionOrderItem.PostingDate,
      SolutionOrderItem.ProfitCenter,
      SolutionOrderItem.ControllingArea,
      SolutionOrderItem.ProfitCenterDeterminationDate,
      SolutionOrderItem.ParentServiceDocumentItemUUID,
      SolutionOrderItem.ServiceDocItemCategory,
      SolutionOrderItem.OriginallyRequestedProduct,
      SolutionOrderItem.Product                                                             as ProductID,

      /* Item - Schedule Line */
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      SolutionOrderItem.ServiceDocumentItemQuantity,

      /* Item - Product */
      SolutionOrderItem.SrvcDocItmOrdToBaseQtyNmrtr,
      SolutionOrderItem.SrvcDocItmOrdToBaseQtyDnmntr,
      SolutionOrderItem.OrderToBaseQuantityExponent,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      @Semantics.unitOfMeasure:true
      SolutionOrderItem.ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      @Semantics.unitOfMeasure:true
      SolutionOrderItem.SrvcDocItemBaseQuantityUnit,
      SolutionOrderItem.Plant,
      SolutionOrderItem.IncotermsPart1,
      SolutionOrderItem.IncotermsPart2,
      SolutionOrderItem.DeliveryPriority,
      SolutionOrderItem.PartialDeliveryIsAllowed,
      SolutionOrderItem.OrderCombinationIsAllowed,
      SolutionOrderItem.DeliveryBlockReason,
      SolutionOrderItem.RequestedDeliveryUTCDateTime,

      /* Partner  */
      SolutionOrderItem.SoldToParty,
      SolutionOrderItem.ServiceTeam,
      SolutionOrderItem.SoldToPartyCountry,
      SolutionOrderItem.SoldToPartyRegion,
      cast( SolutionOrderItem.ResponsibleEmployee as resp_empl )                            as ResponsibleEmployee,
      cast( SolutionOrderItem.ContactPerson as parnr )                                      as ContactPerson,
      SolutionOrderItem.ShipToParty,
      SolutionOrderItem.BillToParty,
      SolutionOrderItem.PayerParty,
      SolutionCustmMgmtPartner.CustMgmtBusinessPartner                                      as ProjectManager,

      /* Pricing Parameter Set */
      SolutionOrderItem.BillableControl,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      SolutionOrderItem.TransactionCurrency,
      @Semantics.currencyCode:true
      SolutionOrderItem.StatisticsCurrency                                                  as ReferenceCurrency,
      SolutionOrderItem.ExchangeRateType,
      SolutionOrderItem.ExchangeRateDate,
      cast( SolutionOrderItem.AccountingExchangeRate as fis_exchange_rate preserving type ) as AccountingExchangeRate,
      SolutionOrderItem.CustomerGroup,
      SolutionOrderItem.PaymentTerms,

      /* Billing Set */
      SolutionOrderItem.BillingBlockReason,

      /* Item - Sales Set */
      SolutionOrderItem.AdditionalCustomerGroup1,
      SolutionOrderItem.AdditionalCustomerGroup2,
      SolutionOrderItem.AdditionalCustomerGroup3,
      SolutionOrderItem.AdditionalCustomerGroup4,
      SolutionOrderItem.AdditionalCustomerGroup5,
      SolutionOrderItem.ServiceDocItemRejectionReason,

      /* Organization Unit Set */
      SolutionOrderItem.SalesOrganizationOrgUnitID,
      SolutionOrderItem.SalesOfficeOrgUnitID,
      SolutionOrderItem.SalesGroupOrgUnitID,
      SolutionOrderItem.DistributionChannel,
      SolutionOrderItem.Division,
      SolutionOrderItem.ServiceOrganization,

      /* Organizational units with the S/4 SD codes */
      SolutionOrderItem.SalesOrganization,
      SolutionOrderItem.SalesOffice,
      SolutionOrderItem.SalesGroup,

      /* Sales Organization */
      SolutionSalesOrganization.CompanyCode                                                 as CompanyCode,

      /* Status */
      SolutionOrderItem.ServiceDocumentItemStatus,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.ServiceDocumentItemIsReleased,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.ServiceDocumentItemHasError,
      SolutionOrderItem.SrvcDocItmDeliveryStatus,
      SolutionOrderItem.ServiceDocItemBillingStatus,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.ServiceDocumentItemIsRejected,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.ServiceDocumentItemIsOpen,
      SolutionOrderItem.SrvcDocItemCreditStatus,

      /* Item - Pricing */
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SolutionOrderItem.ServiceDocumentItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SolutionOrderItem.ServiceDocItemGrossAmount,

      /* Item Product */
      SolutionOrderItem.SrvcMaterialPricingGroup,
      SolutionOrderItem.ProductGroup1,
      SolutionOrderItem.ProductGroup2,
      SolutionOrderItem.ProductGroup3,
      SolutionOrderItem.ProductGroup4,
      SolutionOrderItem.ProductGroup5,
      @EndUserText.label: 'Product Hierarchy'
      cast( SolutionOrderItem.ProductHierarchy as prodh_d )                                 as ProductHierarchy,

      /* Reference Object Details */
      SolutionOrdItemRefObj.SrvcRefObjIsMainObject,
      SolutionOrdItemRefObj.ProductUUID,
      SolutionOrdItemRefObj.SerialNumber,
      SolutionOrdItemRefObj.Equipment,
      SolutionOrdItemRefObj.ServiceRefObjectSequenceNumber,
      SolutionOrdItemRefObj.ServiceReferenceObjectType,
      SolutionOrdItemRefObj.ServiceReferenceObjectUUID,
      @EndUserText.label: 'Functional Location'
      cast( SolutionOrdItemRefObj.FunctionalLocation as vdm_eam_tplnr )                     as FunctionalLocation,

      /* Project Specific Fields */
      @EndUserText.label: 'Project Start Date'
      tstmp_to_dats( SolutionDocumentProjStart.SrvcDocApptStartDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                                               as ProjectStartDate,
      @EndUserText.label: 'Project End Date'
      tstmp_to_dats( SolutionDocumentProjEnd.SrvcDocApptStartDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                                               as ProjectEndDate,
      SolutionOrderItem.ResponsibleCostCenter,
      SolutionOrderItem.EnterpriseProjectServiceOrg,

      /* Subscription Billing Specific Fields */
      cast( SolutionOrderItem.ServiceContrItemStartDateTime as sc_tstfro )                  as ServiceContrItemStartDateTime,
      cast( SolutionOrderItem.ServiceContrItemEndDateTime as sc_tstto )                     as ServiceContrItemEndDateTime,
      SolutionSubsPrcgDate.SrvcDocApptStartDateTime                                         as SubscrpnBillgItmPrcgDateTime,
      SolutionDurationSubsWitPer.SrvcDocDurationValue                                       as SubscrpnWithdrawalPeriod,
      SolutionDurationSubsFixTer.SrvcDocDurationValue                                       as SubscriptionFixedTerm,
      SolutionDurationSubsTerNot.SrvcDocDurationValue                                       as SubscriptionTermOfNotice,
      SolutionDurationSubsMinTer.SrvcDocDurationValue                                       as SubscriptionMinimumTerm,
      SolutionDurationSubsRenTer.SrvcDocDurationValue                                       as SubscriptionRenewalPeriod,
      SolutionDurationSubsDefTer.SrvcDocDurationValue                                       as SubscriptionExpectedTerm,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.MidBillgCycExprtnIsAllowed,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.SubscrpnContrTrmsAreSpecified,
      SolutionOrderItem.SubscriptionBillingCycle,
      /* Enhancement Solution Order */
      @Semantics.uuid
      SolutionOrderItem.SubscrpnBillgRatePlanCharUUID,

      /* Enhancement Solution Order */
      /* Project Details related to Solution Order */
      SolutionOrderProjLink.ProjectUUID,
      SolutionOrderProjLink._EnterpriseProject.ProjectInternalID,




      /*  Associations  */
      /* Keys */
      _ServiceObjType,
      _ServiceDocument,

      /* Item - Product */
      _BaseUnit_2,
      _SalesUnit,

      /* Pricing Parameter Set */
      _TransactionCurrency
}
where
      SolutionOrderItem.ServiceObjectType           = 'BUS2000172'
  and SolutionOrderItem.ServiceDocumentTemplateType is initial
```
