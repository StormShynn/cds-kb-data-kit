---
name: C_PURCHASINGGROUPANALYSIS
description: "Purchasinggroupanalysis"
semantic_vi: "View Purchasing Group Analysis cung cấp dữ liệu để phân tích các nhóm mua hàng, được sử dụng để nhóm các tài liệu mua hàng như đơn đặt hàng và hợp đồng mua hàng. View này hữu ích để phân tích hiệu suất của nhóm mua hàng và xác định các xu hướng."
keywords:
  - "purchasing group"
  - "purchase order"
  - "đơn mua hàng"
  - "hợp đồng mua hàng"
  - "ekko"
  - "sourcing"
  - "procurement"
  - "purchasing document"
  - "analysis"
  - "trend"
  - "mua hàng"
  - "sourcing & procurement"
semantic_en: "The Purchasing Group Analysis view provides data for analyzing purchasing groups, which are used to group purchasing documents such as purchase orders and contracts. This view is useful for analyzing purchasing group performance and identifying trends."
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
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURCHASINGGROUPANALYSIS

**Purchasinggroupanalysis**

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
| `name:'I_Currency'` |  | |  |  |  |  |
| `element:'Currency'` |  | |  |  |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality:  #D
@ObjectModel.usageType.sizeCategory: #XL
@AbapCatalog.sqlViewName: 'CMMPURGRPANA'
@VDM.viewType: #CONSUMPTION
@Analytics.dataCategory: #CUBE
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchasing Group Analysis Query'
@OData.publish: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
define view C_PurchasingGroupAnalysis

  with parameters
    @Consumption.defaultValue: 'EUR'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_Currency',
        element:'Currency'
      }
    }]
    P_DisplayCurrency : displaycurrency,
    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction    : datefunctionid,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_StartDate       : vdm_validitystart,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_EndDate         : vdm_validityend 

  as select from P_PurchasingGroupAnalysis3( P_DisplayCurrency: $parameters.P_DisplayCurrency, P_StartDate: $parameters.P_StartDate, P_EndDate: $parameters.P_EndDate )

  association [1..1] to I_PurchasingOrganization as _PurchasingOrganization

                                                              on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_PurchasingGroup        as _PurchasingGroup

                                                              on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup

  association [1..1] to I_Country                as _Country

                                                              on  $projection.SupplierCountry = _Country.Country

  association [1..1] to C_MM_SupplierValueHelp   as _Supplier on  $projection.Supplier    = _Supplier.Supplier
                                                              and $projection.CompanyCode = _Supplier.CompanyCode


{
  key CalendarYear,

  key CalendarMonth,

  key CalendarQuarter,

  key CalendarWeek,

      @ObjectModel.text.element: ['PurchasingOrganizationName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'PurchasingOrganizationName'
      @Consumption.semanticObject: 'PurchasingOrganization'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_PurchasingOrgValueHelp', element : 'PurchasingOrganization' } }]

  key PurchasingOrganization,

      @ObjectModel.text.element: ['PurchasingGroupName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'PurchasingGroupName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_PurchasingGroupValueHelp', element : 'PurchasingGroup' } }]
  key PurchasingGroup,

      @ObjectModel.text.element: ['SupplierName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'SupplierName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_MM_SmplSupplierValueHelp', element : 'Supplier' } }]
  key Supplier,

  key P_PurchasingGroupAnalysis3.CompanyCode,

      @UI.hidden: true
      @Semantics.unitOfMeasure: true
  key OrderQuantityUnit,
      @UI.hidden: true
  key PurchasingDocumentCategory,
      @UI.hidden: true
  key PurchasingDocumentStatus,

      //@DefaultAggregation: #SUM
      @UI.hidden: true
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      cast(RoughGoodsReceiptQty as wemng)                                      as GoodsReceiptQty,

      @Semantics.text: true
      _PurchasingOrganization.PurchasingOrganizationName,

      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_PurchasingGroupValueHelp', element : 'PurchasingGroup' } }]
      @Semantics.text: true
      _PurchasingGroup.PurchasingGroupName                                     as PurchasingGroupName,

      @Semantics.text: true
      _Supplier.SupplierName,

      @ObjectModel.text.element: ['CountryName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'CountryName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_MM_CountryValueHelp', element : 'Country' } }]
      cast( _Supplier.Country as mm_a_supplier_country )                       as SupplierCountry,

      @Semantics.text: true
      _Supplier._CountryText[1: Language = $session.system_language].CountryName,

      cast( :P_DisplayCurrency as displaycurrency )                            as DisplayCurrency,


      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      cast( PurchaseOrderAmount as mm_pur_ana_de_pur_net_amount)               as PurchaseOrderAmount,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      cast( TotalInvoiceAmountInDisCrcy  as mm_pur_ana_de_invoice_amt)         as InvoiceAmtInDisplayCurrency,

      @DefaultAggregation: #SUM
      //      cast(case when PurchasingDocumentCategory = 'K'
      //      then PurchasingDocument
      //      end as mm_a_numberofpurchasecontracts)                                                as  NumberOfContracts,
      cast ( NumberOfContracts as mm_a_numberofpurchasecontracts)              as NumberOfContracts,

      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      //      case when PurchasingDocumentCategory = 'K'
      //      then PurchasingDocumentItem
      //      else 0
      //      end                                                                                   as  NumberOfContractItems,
      NumberOfContractItems,

      @DefaultAggregation: #SUM
      //      cast(case when PurchasingDocumentCategory = 'F'
      //      then PurchasingDocument
      //      end  as mm_a_numberofpurchaseorders)                                                  as  NumberOfPurchaseOrders,
      cast ( NumberOfPurchaseOrders as mm_a_numberofpurchaseorders)            as NumberOfPurchaseOrders,

      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      //      case when PurchasingDocumentCategory = 'F'
      //      then PurchasingDocumentItem
      //      else 0
      //      end                                                                                   as  NumberOfPurchaseOrderItems,
      NumberOfPurchaseOrderItems,

      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      //      case when PurchasingDocumentStatus = 'K'
      //      then PurchasingDocumentItem
      //      else 0
      //      end  as  NumberOfQuotationItems,
      NumberOfQuotationItems,

      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      case when PurchasingDocumentCategory = 'F'
      then cast(ScheduleLines as abap.int4 )
      else 0
      end                                                                      as NumberOfPurOrderSchedgLines,


      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      case when PurchasingDocumentCategory = 'L'
      then ScheduleLines
      else 0
      end                                                                      as NumberOfSchedgAgrmtSchedgLines,

      @DefaultAggregation: #SUM
      //      cast( case when PurchasingDocumentCategory = 'L'
      //      then PurchasingDocument
      //      end  as  mm_a_numberofschedulingagrmnts)                                              as  NumberOfSchedulingAgreements,

      cast ( NumberOfSchedulingAgreements as mm_a_numberofschedulingagrmnts)   as NumberOfSchedulingAgreements,

      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      //      case when PurchasingDocumentCategory = 'L'
      //      then PurchasingDocumentItem
      //      else 0
      //      end                                                                                   as  NumberOfSchedgAgrmtItems,
      NumberOfSchedgAgrmtItems,

      // check the below measures

      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      //      case when PurchasingDocumentCategory = 'A' and PurchasingDocumentStatus = 'A'
      //      then PurchasingDocumentItem
      //      else 0
      //      end                                                                                   as  NumberOfRequestsForQuotation,
      NumberOfRequestsForQuotation,

      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      //      case when PurchasingDocumentCategory = 'A' and PurchasingDocumentStatus = 'A'
      //      then PurchasingDocumentItem
      //      else 0
      //      end                                                                                   as  NumberOfReqForQuotationItems,

      NumberOfReqForQuotationItems,

      @DefaultAggregation: #SUM
      //          case when PurchaseOrderTransactionType = '1'
      //          then NumberofTransactionType
      //          else 0
      //          end as
      cast(cast (NumberOfDeliveries as abap.int4) as  mm_a_numberofdeliveries) as NumberOfDeliveries
}
```
