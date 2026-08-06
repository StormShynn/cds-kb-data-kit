---
name: I_BUSINESSPARTNERCUSTOMER
description: Business PartnerCUSTOMER
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - customer
  - business-partner
  - partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERCUSTOMER

**Business PartnerCUSTOMER**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Customer` | `kna1.kunnr` |
| key `BusinessPartner` | `but000.partner` |
| `BusinessPartnerUUID` | `cvi_cust_link.partner_guid` |
| `CustomerAccountGroup` | `kna1.ktokd` |
| `AlternativePayerAccount` | `kna1.knrza` |
| `DataMediumExchangeIndicator` | `kna1.dtams` |
| `Supplier` | `kna1.lifnr` |
| `CustomerClassification` | `kna1.kukla` |
| `VATLiability` | `kna1.stkzu` |
| `PostingIsBlocked` | `kna1.sperr` |
| `DeliveryIsBlocked` | `kna1.lifsd` |
| `BillingIsBlockedForCustomer` | `kna1.faksd` |
| `OrderIsBlockedForCustomer` | `kna1.aufsd` |
| `IsNaturalPerson` | `kna1.stkzn` |
| `BusinessPartnerGrouping` | `but000.bu_group` |
| `AuthorizationGroup` | `kna1.begru` |
| `DeliveryDateTypeRule` | `kna1.delivery_date_rule` |
| `IsActiveEntity` | `cast( 'X' as sdraft_is_active preserving type )` |
| `ExpressTrainStationName` | `kna1.bahne` |
| `TrainStationName` | `kna1.bahns` |
| `CityLocationCoordinatesCode` | `kna1.locco` |
| `Plant` | `kna1.werks` |
| `CustomerCorporateGroup` | `kna1.konzs` |
| `DataExchangeInstructionKey` | `kna1.dtaws` |
| `IndustryCode1` | `kna1.bran1` |
| `IndustryCode2` | `kna1.bran2` |
| `IndustryCode3` | `kna1.bran3` |
| `IsCompetitor` | `kna1.dear1` |
| `IsSalesPartner` | `kna1.dear2` |
| `IsDefaultSoldToParty` | `kna1.dear5` |
| `IsConsumer` | `kna1.dear6` |
| `FiscalAddress` | `kna1.fiskn` |
| `FreeDefinedAttribute03` | `kna1.katr3` |
| `CustomerConditionGroup1` | `kna1.kdkg1` |
| `CustomerConditionGroup2` | `kna1.kdkg2` |
| `CustomerConditionGroup3` | `kna1.kdkg3` |
| `CustomerConditionGroup4` | `kna1.kdkg4` |
| `CustomerConditionGroup5` | `kna1.kdkg5` |
| `AddressID` | `kna1.adrnr` |
| `InternationalLocationNumber1` | `kna1.bbbnr` |
| `InternationalLocationNumber2` | `kna1.bbsnr` |
| `InternationalLocationNumber3` | `kna1.bubkz` |
| `CityCode` | `kna1.cityc` |
| `County` | `kna1.counc` |
| `CustomerHasUnloadingPoint` | `kna1.exabl` |
| `CustomerWorkingTimeCalendar` | `kna1.knazk` |
| `IsBusinessPurposeCompleted` | `kna1.cvp_xblck` |
| `BPIsEqualizationTaxSubject` | `cast (kna1.stkza as xfeld preserving type)` |
| `Country` | `kna1.land1` |
| `Region` | `kna1.regio` |
| `DeletionIndicator` | `kna1.loevm` |
| `Language` | `kna1.spras` |
| `SalesIsBlockedForCustomer` | `cast (kna1.cassd as abap.char(1))` |
| `PaymentReason` | `kna1.paytrsn` |
| `CustomerCentralDeletionIsBlock` | `kna1.nodel` |
| `AlternativePayerIsAllowed` | `kna1.xzemp` |
| `BPPlannedAnnualSalesYear` | `kna1.umjah` |
| `BPPlannedAnnualSalesCurrency` | `kna1.uwaer` |
| `BPPlannedAnnualSalesAmount` | `kna1.umsat` |
| `CustomerTradingPartnerID` | `kna1.vbund` |
| `FiscalYearVariant` | `kna1.periv` |
| `AccountTaxType` | `kna1.stcdt` |
| `IndustryCode4` | `kna1.bran4` |
| `IndustryCode5` | `kna1.bran5` |
| `TaxInvoiceRepresentativeName` | `kna1.j_1kfrepre` |
| `BusinessType` | `kna1.j_1kftbus` |
| `IndustryType` | `kna1.j_1kftind` |
| `FreeDefinedAttribute01` | `kna1.katr1` |
| `FreeDefinedAttribute02` | `kna1.katr2` |
| `FreeDefinedAttribute04` | `kna1.katr4` |
| `FreeDefinedAttribute05` | `kna1.katr5` |
| `FreeDefinedAttribute06` | `kna1.katr6` |
| `FreeDefinedAttribute07` | `kna1.katr7` |
| `FreeDefinedAttribute08` | `kna1.katr8` |
| `FreeDefinedAttribute09` | `kna1.katr9` |
| `FreeDefinedAttribute10` | `kna1.katr10` |
| `DataControllerSet` | `kna1.xdcset` |
| `DataController1` | `kna1.data_ctrlr1` |
| `DataController2` | `kna1.data_ctrlr2` |
| `DataController3` | `kna1.data_ctrlr3` |
| `DataController4` | `kna1.data_ctrlr4` |
| `DataController5` | `kna1.data_ctrlr5` |
| `DataController6` | `kna1.data_ctrlr6` |
| `DataController7` | `kna1.data_ctrlr7` |
| `DataController8` | `kna1.data_ctrlr8` |
| `DataController9` | `kna1.data_ctrlr9` |
| `DataController10` | `kna1.data_ctrlr10` |
| `_CustomerToBusinessPartner` | *Association* |
| `_AccountGroupValueHelp` | *Association* |
| `_CustomerAccountGroupText` | *Association* |
| `_BillingBlockReasonValueHelp` | *Association* |
| `_BillingBlockReasonText` | *Association* |
| `_DelivBlkRsnValueHelp` | *Association* |
| `_DeliveryBlockReasonText` | *Association* |
| `_CustomerClassValueHelp` | *Association* |
| `_CustomerClassificationText` | *Association* |
| `_BusinessPartner` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerToBusinessPartner` | `I_Customer_to_BusinessPartner` | [1..1] |
| `_CustomerExt` | `E_Customer` | [0..1] |
| `_AccountGroupValueHelp` | `I_CustomerAccountGroup` | [0..1] |
| `_CustomerAccountGroupText` | `I_CustomerAccountGroupText` | [0..*] |
| `_AlternativePayerValueHelp` | `I_Customer_VH` | [0..1] |
| `_BillingBlockReasonValueHelp` | `I_BillingBlockReason` | [0..1] |
| `_BillingBlockReasonText` | `I_BillingBlockReasonText` | [0..*] |
| `_DelivBlkRsnValueHelp` | `I_DeliveryBlockReason` | [0..1] |
| `_DeliveryBlockReasonText` | `I_DeliveryBlockReasonText` | [0..*] |
| `_CustomerClassValueHelp` | `I_CustomerClassification` | [0..1] |
| `_CustomerClassificationText` | `I_CustomerClassificationText` | [0..*] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUPACUSTOMER'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: 'IsBusinessPurposeCompleted'
@EndUserText.label: 'Business Partner Customer'
@ObjectModel.sapObjectNodeType.name: 'Customer'
@ObjectModel.representativeKey: 'Customer'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]

define view I_BusinessPartnerCustomer 
  as select from    kna1

    inner join      cvi_cust_link on kna1.kunnr = cvi_cust_link.customer
    left outer join but000        on cvi_cust_link.partner_guid = but000.partner_guid //association required to exposebusinesspartertype for Dynamic fieldcontol




  association [1..1] to I_Customer_to_BusinessPartner as _CustomerToBusinessPartner   on $projection.Customer = _CustomerToBusinessPartner.Customer

  association [0..1] to E_Customer                    as _CustomerExt                 on $projection.Customer = _CustomerExt.Customer

  // Associations added for Text Annotation Removal
  association [0..1] to I_CustomerAccountGroup        as _AccountGroupValueHelp       on $projection.CustomerAccountGroup = _AccountGroupValueHelp.CustomerAccountGroup

  association [0..*] to I_CustomerAccountGroupText    as _CustomerAccountGroupText    on $projection.CustomerAccountGroup = _CustomerAccountGroupText.CustomerAccountGroup

  association [0..1] to I_Customer_VH                 as _AlternativePayerValueHelp   on $projection.AlternativePayerAccount = _AlternativePayerValueHelp.Customer

  association [0..1] to I_BillingBlockReason          as _BillingBlockReasonValueHelp on $projection.BillingIsBlockedForCustomer = _BillingBlockReasonValueHelp.BillingBlockReason

  association [0..*] to I_BillingBlockReasonText      as _BillingBlockReasonText      on $projection.BillingIsBlockedForCustomer = _BillingBlockReasonText.BillingBlockReason

  association [0..1] to I_DeliveryBlockReason         as _DelivBlkRsnValueHelp        on $projection.DeliveryIsBlocked = _DelivBlkRsnValueHelp.DeliveryBlockReason

  association [0..*] to I_DeliveryBlockReasonText     as _DeliveryBlockReasonText     on $projection.DeliveryIsBlocked = _DeliveryBlockReasonText.DeliveryBlockReason

  association [0..1] to I_CustomerClassification      as _CustomerClassValueHelp      on $projection.CustomerClassification = _CustomerClassValueHelp.CustomerClassification

  association [0..*] to I_CustomerClassificationText  as _CustomerClassificationText  on $projection.CustomerClassification = _CustomerClassificationText.CustomerClassification

  association [1..1] to I_BusinessPartner             as _BusinessPartner             on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
{
  key kna1.kunnr                                      as Customer,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key but000.partner                                  as BusinessPartner,
      cvi_cust_link.partner_guid                      as BusinessPartnerUUID,
      //@ObjectModel: {
      //            foreignKey.association: '_AccountGroupValueHelp'
      //         }
      @ObjectModel.text.association: '_CustomerAccountGroupText'
      kna1.ktokd                                      as CustomerAccountGroup,
     
      kna1.knrza                                      as AlternativePayerAccount,
      kna1.dtams                                      as DataMediumExchangeIndicator,
      
      kna1.lifnr                                      as Supplier,
      @ObjectModel: {
                foreignKey.association: '_CustomerClassValueHelp'
              }
      @ObjectModel.text.association: '_CustomerClassificationText'
      kna1.kukla                                      as CustomerClassification,
      kna1.stkzu                                      as VATLiability,
      kna1.sperr                                      as PostingIsBlocked,
      @ObjectModel: {
                foreignKey.association: '_DelivBlkRsnValueHelp'
              }
      @ObjectModel.text.association: '_DeliveryBlockReasonText'
      kna1.lifsd                                      as DeliveryIsBlocked,
      @ObjectModel: {
               foreignKey.association: '_BillingBlockReasonValueHelp'
             }
      @ObjectModel.text.association: '_BillingBlockReasonText'
      kna1.faksd                                      as BillingIsBlockedForCustomer,
      //Newly added fields
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
      //kna1.cassd                               as SalesIsBlockedForCustomer,
      @Semantics.booleanIndicator: true
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
      kna1.j_1kfrepre                                      as TaxInvoiceRepresentativeName,
      kna1.j_1kftbus                                       as BusinessType,
      kna1.j_1kftind                                       as IndustryType,
      
      kna1.katr1                                                                                                       as FreeDefinedAttribute01,

      kna1.katr2                                                                                                       as FreeDefinedAttribute02,

     // kna1.katr3                                                                                                       as FreeDefinedAttribute03,

      kna1.katr4                                                                                                       as FreeDefinedAttribute04,

      kna1.katr5                                                                                                       as FreeDefinedAttribute05,

      kna1.katr6                                                                                                       as FreeDefinedAttribute06,

      kna1.katr7                                                                                                       as FreeDefinedAttribute07,

      kna1.katr8                                                                                                       as FreeDefinedAttribute08,

      kna1.katr9                                                                                                       as FreeDefinedAttribute09,

      kna1.katr10                                                                                                      as FreeDefinedAttribute10,
      
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.xdcset                                                                                                 as DataControllerSet,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr1                                                                                            as DataController1,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr2                                                                                            as DataController2,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr3                                                                                            as DataController3,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr4                                                                                            as DataController4,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr5                                                                                            as DataController5,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr6                                                                                            as DataController6,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr7                                                                                            as DataController7,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr8                                                                                            as DataController8,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr9                                                                                            as DataController9,
      @Consumption.hidden:true
      @UI.hidden:true
      kna1.data_ctrlr10                                                                                           as DataController10,
    
      

      _AccountGroupValueHelp,
      _CustomerAccountGroupText,
      _BillingBlockReasonValueHelp,
      _BillingBlockReasonText,
      _DelivBlkRsnValueHelp,
      _DeliveryBlockReasonText,
      _CustomerClassValueHelp,
      _CustomerClassificationText,
      _BusinessPartner,
      _CustomerToBusinessPartner
}
```
