---
name: I_BUSINESSPARTNERCUSTOMERDEX
description: "Data Extraction for BP Customer"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERCUSTOMERDEX')/$value
semantic_en: "Data Extraction for BP Customer"
semantic_vi: "Data Extraction for BP Customer — CDS view giao diện dựa trên kna1."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "customer"
  - "business"
  - "partner"
  - "account"
  - "group"
  - "alternative"
  - "payer"
tags:
  - LO
  - bo:businesspartner
  - component:LO-MD-BP-2CL
  - customer
  - interface-view
  - LO-MD
  - LO-MD-BP
  - LO-MD-BP-2CL
  - lob:logistics general
---
# I_BUSINESSPARTNERCUSTOMERDEX

**Data Extraction for BP Customer**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERCUSTOMERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `Customer` |  | |  | `kunnr` | `CHAR(10)` | Customer Number |
| `BusinessPartnerUUID` |  | |  | `partner_guid` | `RAW(16)` | Business Partner GUID |
| `CustomerAccountGroup` |  | |  | `ktokd` | `CHAR(4)` | Customer Account Group |
| `AlternativePayerAccount` |  | |  | `knrza` | `CHAR(10)` | Account Number of an Alternative Payer |
| `DataMediumExchangeIndicator` |  | |  | `dtams` | `CHAR(1)` | Recipient Code for Data Medium Exchange |
| `Supplier` |  | |  | `lifnr` | `CHAR(10)` | Account Number of Supplier |
| `CustomerClassification` |  | |  | `kukla` | `CHAR(2)` | Customer Classification |
| `VATLiability` |  | |  | `stkzu` | `CHAR(1)` | Liable for VAT |
| `PostingIsBlocked` |  | |  | `sperr` | `CHAR(1)` | Central Posting Block |
| `DeliveryIsBlocked` |  | |  | `lifsd` | `CHAR(2)` | Central delivery block for the customer |
| `BillingIsBlockedForCustomer` |  | |  | `faksd` | `CHAR(2)` | Central billing block for customer |
| `OrderIsBlockedForCustomer` |  | |  | `aufsd` | `CHAR(2)` | Central order block for customer |
| `IsNaturalPerson` |  | |  | `stkzn` | `CHAR(1)` | Natural Person |
| `BusinessPartnerGrouping` |  | |  | `bu_group` | `CHAR(4)` | Business Partner Grouping |
| `AuthorizationGroup` |  | |  | `begru` | `CHAR(4)` | Authorization Group |
| `DeliveryDateTypeRule` |  | |  | `delivery_date_rule` | `CHAR(1)` | Delivery Date Rule |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` | `CHAR(1)` | Draft - Indicator - Is active document |
| `ExpressTrainStationName` |  | |  | `bahne` | `CHAR(25)` | Express train station |
| `TrainStationName` |  | |  | `bahns` | `CHAR(25)` | Train station |
| `CityLocationCoordinatesCode` |  | |  | `locco` | `CHAR(10)` | City Coordinates |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `CustomerCorporateGroup` |  | |  | `konzs` | `CHAR(10)` | Group Key |
| `DataExchangeInstructionKey` |  | |  | `dtaws` | `CHAR(2)` | Instruction Key for Data Medium Exchange |
| `IndustryCode1` |  | |  | `bran1` | `CHAR(10)` | Industry Code 1 |
| `IndustryCode2` |  | |  | `bran2` | `CHAR(10)` | Industry Code 2 |
| `IndustryCode3` |  | |  | `bran3` | `CHAR(10)` | Industry Code 3 |
| `IsCompetitor` |  | |  | `dear1` | `CHAR(1)` | Indicator: Competitor |
| `IsSalesPartner` |  | |  | `dear2` | `CHAR(1)` | Indicator: Sales partner |
| `IsDefaultSoldToParty` |  | |  | `dear5` | `CHAR(1)` | ID for default sold-to party |
| `IsConsumer` |  | |  | `dear6` | `CHAR(1)` | Indicator: Consumer |
| `FiscalAddress` |  | |  | `fiskn` | `CHAR(10)` | Account number of the master record with the fiscal address |
| `FreeDefinedAttribute03` |  | |  | `katr3` | `CHAR(2)` | Attribute 3 |
| `CustomerConditionGroup1` |  | |  | `kdkg1` | `CHAR(2)` | Customer Condition Group 1 |
| `CustomerConditionGroup2` |  | |  | `kdkg2` | `CHAR(2)` | Customer Condition Group 2 |
| `CustomerConditionGroup3` |  | |  | `kdkg3` | `CHAR(2)` | Customer Condition Group 3 |
| `CustomerConditionGroup4` |  | |  | `kdkg4` | `CHAR(2)` | Customer Condition Group 4 |
| `CustomerConditionGroup5` |  | |  | `kdkg5` | `CHAR(2)` | Customer Condition Group 5 |
| `AddressID` |  | |  | `adrnr` | `CHAR(10)` | Address |
| `InternationalLocationNumber1` |  | |  | `bbbnr` | `NUMC(7)` | International location number  (part 1) |
| `InternationalLocationNumber2` |  | |  | `bbsnr` | `NUMC(5)` | International location number (Part 2) |
| `InternationalLocationNumber3` |  | |  | `bubkz` | `NUMC(1)` | Check digit for the international location number |
| `CityCode` |  | |  | `cityc` | `CHAR(4)` | City Code |
| `County` |  | |  | `counc` | `CHAR(3)` | County Code |
| `CustomerHasUnloadingPoint` |  | |  | `exabl` | `CHAR(1)` | Indicator: Unloading points exist |
| `CustomerWorkingTimeCalendar` |  | |  | `knazk` | `CHAR(2)` | Working Time Calendar |
| `IsBusinessPurposeCompleted` |  | |  | `cvp_xblck` | `CHAR(1)` | Business Purpose Completed Flag |
| `BPIsEqualizationTaxSubject` |  | |  | `cast (kna1.stkza as xfeld preserving type)` | `CHAR(1)` | Checkbox |
| `Country` |  | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `DeletionIndicator` |  | |  | `loevm` | `CHAR(1)` | Central Deletion Flag for Master Record |
| `Language` |  | |  | `spras` | `LANG(1)` | Language Key |
| `SalesIsBlockedForCustomer` |  | |  | `cast (kna1.cassd as abap.char(1))` | `CHAR(1)` |  |
| `PaymentReason` |  | |  | `paytrsn` | `CHAR(4)` | Payment Reason |
| `CustomerCentralDeletionIsBlock` |  | |  | `nodel` | `CHAR(1)` | Central deletion block for master record |
| `AlternativePayerIsAllowed` |  | |  | `xzemp` | `CHAR(1)` | Indicator: Is an alternative payer allowed in document? |
| `BPPlannedAnnualSalesYear` |  | |  | `umjah` | `NUMC(4)` | Year For Which Sales are Given |
| `BPPlannedAnnualSalesCurrency` |  | |  | `uwaer` | `CUKY(5)` | Currency of sales figure |
| `BPPlannedAnnualSalesAmount` |  | |  | `umsat` | `CURR(8)` | Annual sales |
| `CustomerTradingPartnerID` |  | |  | `vbund` | `CHAR(6)` | Company ID of Trading Partner |
| `FiscalYearVariant` |  | |  | `periv` | `CHAR(2)` | Fiscal Year Variant |
| `AccountTaxType` |  | |  | `stcdt` | `CHAR(2)` | Tax Number Type |
| `IndustryCode4` |  | |  | `bran4` | `CHAR(10)` | Industry Code 4 |
| `IndustryCode5` |  | |  | `bran5` | `CHAR(10)` | Industry Code 5 |
| `TaxInvoiceRepresentativeName` |  | |  | `j_1kfrepre` | `CHAR(10)` | Name of Representative |
| `BusinessType` |  | |  | `j_1kftbus` | `CHAR(30)` | Type of Business |
| `IndustryType` |  | |  | `j_1kftind` | `CHAR(30)` | Type of Industry |
| `FreeDefinedAttribute01` |  | |  | `katr1` | `CHAR(2)` | Attribute 1 |
| `FreeDefinedAttribute02` |  | |  | `katr2` | `CHAR(2)` | Attribute 2 |
| `FreeDefinedAttribute04` |  | |  | `katr4` | `CHAR(2)` | Attribute 4 |
| `FreeDefinedAttribute05` |  | |  | `katr5` | `CHAR(2)` | Attribute 5 |
| `FreeDefinedAttribute06` |  | |  | `katr6` | `CHAR(3)` | Attribute 6 |
| `FreeDefinedAttribute07` |  | |  | `katr7` | `CHAR(3)` | Attribute 7 |
| `FreeDefinedAttribute08` |  | |  | `katr8` | `CHAR(3)` | Attribute 8 |
| `FreeDefinedAttribute09` |  | |  | `katr9` | `CHAR(3)` | Attribute 9 |
| `FreeDefinedAttribute10` |  | |  | `katr10` | `CHAR(3)` | Attribute 10 |
| `DataControllerSet` |  | |  | `xdcset` | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` |  | |  | `data_ctrlr1` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | |  | `data_ctrlr2` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | |  | `data_ctrlr3` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | |  | `data_ctrlr4` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | |  | `data_ctrlr5` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | |  | `data_ctrlr6` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | |  | `data_ctrlr7` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | |  | `data_ctrlr8` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | |  | `data_ctrlr9` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | |  | `data_ctrlr10` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `_CustomerToBusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerToBusinessPartner` | `I_Customer_to_BusinessPartner` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERCUSTOMERDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERCUSTOMERDEX')/$value)*

```abap
@Analytics.technicalName: 'IBUPACUSTOMERDEX'
@Analytics.internalName: #LOCAL
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['IsBusinessPurposeCompleted']
@EndUserText.label: 'Data Extraction for BP Customer'
@ObjectModel.representativeKey: 'BusinessPartner'
@ObjectModel.sapObjectNodeType.name: 'Customer'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
       mapping:[
                {
                   table: 'BUT000', role: #MAIN,
                    viewElement: ['BusinessPartner'],
                    tableElement: ['partner']
                },
                
                 {
                   table: 'CVI_CUST_LINK', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BusinessPartnerUUID'],
                    tableElement: ['partner_guid']
                },
                {
                   table: 'KNA1', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['Customer'],
                    tableElement: ['kunnr']
                }
               
    ]
    }
  }
}
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_BusinessPartnerCustomerDEX 
as select from  kna1
inner join      cvi_cust_link on kna1.kunnr = cvi_cust_link.customer
left outer to one join  but000        on cvi_cust_link.partner_guid = but000.partner_guid //association required to exposebusinesspartertype for Dynamic fieldcontol

  association [1..1] to I_Customer_to_BusinessPartner as _CustomerToBusinessPartner   on $projection.Customer = _CustomerToBusinessPartner.Customer

{
   key but000.partner                                  as BusinessPartner,
      kna1.kunnr                                      as Customer,
      cvi_cust_link.partner_guid                      as BusinessPartnerUUID,   
      kna1.ktokd                                      as CustomerAccountGroup,     
      kna1.knrza                                      as AlternativePayerAccount,
      kna1.dtams                                      as DataMediumExchangeIndicator,
      
      kna1.lifnr                                      as Supplier,     
      kna1.kukla                                      as CustomerClassification,
      kna1.stkzu                                      as VATLiability,
      kna1.sperr                                      as PostingIsBlocked,
      kna1.lifsd                                      as DeliveryIsBlocked,     
      kna1.faksd                                      as BillingIsBlockedForCustomer,   
      kna1.aufsd                                      as OrderIsBlockedForCustomer,
      @Semantics.booleanIndicator: true
      kna1.stkzn                                      as IsNaturalPerson,
      but000.bu_group                                 as BusinessPartnerGrouping,
      //Data protection and privacy Requirement
      kna1.begru                                      as AuthorizationGroup,
      kna1.delivery_date_rule                         as DeliveryDateTypeRule,

      //For extensibility
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity,
      kna1.bahne                                      as ExpressTrainStationName,
      kna1.bahns                                      as TrainStationName,
      kna1.locco                                      as CityLocationCoordinatesCode,
      kna1.werks                                      as Plant,
      kna1.konzs                                      as CustomerCorporateGroup,
      kna1.dtaws                                      as DataExchangeInstructionKey,
      kna1.bran1                                      as IndustryCode1,
      kna1.bran2                                      as IndustryCode2,
      kna1.bran3                                      as IndustryCode3,
      kna1.dear1                                      as IsCompetitor,
      kna1.dear2                                      as IsSalesPartner,
      kna1.dear5                                      as IsDefaultSoldToParty,
      kna1.dear6                                      as IsConsumer,
      kna1.fiskn                                      as FiscalAddress,
      kna1.katr3                                      as FreeDefinedAttribute03,
      kna1.kdkg1                                      as CustomerConditionGroup1,
      kna1.kdkg2                                      as CustomerConditionGroup2,
      kna1.kdkg3                                      as CustomerConditionGroup3,
      kna1.kdkg4                                      as CustomerConditionGroup4,
      kna1.kdkg5                                      as CustomerConditionGroup5,
      kna1.adrnr                                      as AddressID,                   //LOB adoption changes - start
      kna1.bbbnr                                      as InternationalLocationNumber1,
      kna1.bbsnr                                      as InternationalLocationNumber2,
      kna1.bubkz                                      as InternationalLocationNumber3,
      kna1.cityc                                      as CityCode,
      kna1.counc                                      as County,
      kna1.exabl                                      as CustomerHasUnloadingPoint,
      kna1.knazk                                      as CustomerWorkingTimeCalendar, // LOB adoption changes - end
      @Semantics.booleanIndicator: true
      kna1.cvp_xblck                                  as IsBusinessPurposeCompleted,
      cast (kna1.stkza as xfeld preserving type)      as BPIsEqualizationTaxSubject,
      // Fields added for exposing keys for city code
      kna1.land1                                      as Country,
      kna1.regio                                      as Region,
      kna1.loevm                                      as DeletionIndicator,
      kna1.spras                                      as Language,     
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Central sales block for customer'
      cast (kna1.cassd as abap.char(1))               as SalesIsBlockedForCustomer,
      kna1.paytrsn                                    as PaymentReason,
      kna1.nodel                                      as CustomerCentralDeletionIsBlock,
      //Field addition for ODM-MDI mapping
      kna1.xzemp                                      as AlternativePayerIsAllowed,
      kna1.umjah                                      as BPPlannedAnnualSalesYear,
      kna1.uwaer                                      as BPPlannedAnnualSalesCurrency,
      @Semantics.amount.currencyCode:'BPPlannedAnnualSalesCurrency'
      kna1.umsat                                      as BPPlannedAnnualSalesAmount,
      kna1.vbund                                      as CustomerTradingPartnerID,
      kna1.periv                                      as FiscalYearVariant,
      kna1.stcdt                                      as AccountTaxType,
      kna1.bran4                                      as IndustryCode4,
      kna1.bran5                                      as IndustryCode5,
      kna1.j_1kfrepre                                 as TaxInvoiceRepresentativeName,
      kna1.j_1kftbus                                  as BusinessType,
      kna1.j_1kftind                                  as IndustryType,
      
      kna1.katr1                                      as FreeDefinedAttribute01,

      kna1.katr2                                      as FreeDefinedAttribute02,

     // kna1.katr3                                                                                                       as FreeDefinedAttribute03,

      kna1.katr4                                      as FreeDefinedAttribute04,

      kna1.katr5                                      as FreeDefinedAttribute05,

      kna1.katr6                                      as FreeDefinedAttribute06,

      kna1.katr7                                      as FreeDefinedAttribute07,

      kna1.katr8                                      as FreeDefinedAttribute08,

      kna1.katr9                                      as FreeDefinedAttribute09,

      kna1.katr10                                     as FreeDefinedAttribute10,
      
      @Consumption.hidden:true
      kna1.xdcset                                       as DataControllerSet,
      @Consumption.hidden:true    
      kna1.data_ctrlr1                                  as DataController1,
      @Consumption.hidden:true      
      kna1.data_ctrlr2                                  as DataController2,
      @Consumption.hidden:true      
      kna1.data_ctrlr3                                  as DataController3,
      @Consumption.hidden:true      
      kna1.data_ctrlr4                                  as DataController4,
      @Consumption.hidden:true     
      kna1.data_ctrlr5                                  as DataController5,
      @Consumption.hidden:true      
      kna1.data_ctrlr6                                   as DataController6,
      @Consumption.hidden:true      
      kna1.data_ctrlr7                                  as DataController7,
      @Consumption.hidden:true      
      kna1.data_ctrlr8                                   as DataController8,
      @Consumption.hidden:true    
      kna1.data_ctrlr9                                 as DataController9,
      @Consumption.hidden:true      
      kna1.data_ctrlr10                               as DataController10,
    
      _CustomerToBusinessPartner
  
}
```
