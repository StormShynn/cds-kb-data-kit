---
name: I_CUSTOMER
description: Customer
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
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_CUSTOMER

**Customer**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Customer` | `cast(kna1.kunnr as kunnr preserving type)` |
| `CustomerName` | `cast(substring(rtrim(replace(concat(name1, concat(' &@', name2)), '&@', ''),' '),1,80) as md_customer_name)` |
| `CustomerFullName` | `cast(concat( concat( concat( concat( concat( concat_with_space( anred, name1, 1 ), name2 ), name3 ), name4 ), '/' ), concat_with_space(pstlz, ort01, 1 ) ) as md_customer_full_name)` |
| `BPCustomerName` | `cast(substring(rtrim(replace(concat(_AddressDefaultRepresentation.AddresseeName1, concat(' &@', _AddressDefaultRepresentation.AddresseeName2)), '&@', ''),' '),1,81) as customername_2)` |
| `BPCustomerFullName` | `cast(concat( concat_with_space( concat_with_space( concat_with_space(_AddressDefaultRepresentation.AddresseeName1, _AddressDefaultRepresentation.AddresseeName2,1 ), _AddressDefaultRepresentation.AddresseeName3,1 ), _AddressDefaultRepresentation.AddresseeName4,1 ), ' ' ) as md_customer_full_name)` |
| `CreatedByUser` | `kna1.ernam` |
| `CreationDate` | `kna1.erdat` |
| `AddressID` | `kna1.adrnr` |
| `CustomerClassification` | `kna1.kukla` |
| `VATRegistration` | `kna1.stceg` |
| `CustomerAccountGroup` | `kna1.ktokd` |
| `AuthorizationGroup` | `kna1.begru` |
| `DeliveryIsBlocked` | `kna1.lifsd` |
| `PostingIsBlocked` | `kna1.sperr` |
| `BillingIsBlockedForCustomer` | `kna1.faksd` |
| `OrderIsBlockedForCustomer` | `kna1.aufsd` |
| `InternationalLocationNumber1` | `kna1.bbbnr` |
| `IsOneTimeAccount` | `kna1.xcpdk` |
| `TaxJurisdiction` | `kna1.txjcd` |
| `Industry` | `kna1.brsch` |
| `TaxNumberType` | `kna1.stcdt` |
| `TaxNumber1` | `kna1.stcd1` |
| `TaxNumber2` | `kna1.stcd2` |
| `TaxNumber3` | `kna1.stcd3` |
| `TaxNumber4` | `kna1.stcd4` |
| `TaxNumber5` | `kna1.stcd5` |
| `TaxNumber6` | `kna1.stcd6` |
| `CustomerCorporateGroup` | `kna1.konzs` |
| `Supplier` | `kna1.lifnr` |
| `NielsenRegion` | `kna1.niels` |
| `IndustryCode1` | `kna1.bran1` |
| `IndustryCode2` | `kna1.bran2` |
| `IndustryCode3` | `kna1.bran3` |
| `IndustryCode4` | `kna1.bran4` |
| `IndustryCode5` | `kna1.bran5` |
| `Country` | `kna1.land1` |
| `OrganizationBPName1` | `kna1.name1` |
| `OrganizationBPName2` | `kna1.name2` |
| `CityName` | `kna1.ort01` |
| `PostalCode` | `kna1.pstlz` |
| `StreetName` | `kna1.stras` |
| `SortField` | `kna1.sortl` |
| `FaxNumber` | `kna1.telfx` |
| `BR_SUFRAMACode` | `kna1.suframa` |
| `Region` | `kna1.regio` |
| `TelephoneNumber1` | `kna1.telf1` |
| `TelephoneNumber2` | `kna1.telf2` |
| `AlternativePayerAccount` | `kna1.knrza` |
| `DataMediumExchangeIndicator` | `kna1.dtams` |
| `VATLiability` | `kna1.stkzu` |
| `IsBusinessPurposeCompleted` | `kna1.cvp_xblck` |
| `ResponsibleType` | `kna1.fityp` |
| `FiscalAddress` | `kna1.fiskn` |
| `NFPartnerIsNaturalPerson` | `kna1.stkzn` |
| `DeletionIndicator` | `kna1.loevm` |
| `Language` | `kna1.spras` |
| `TradingPartner` | `kna1.vbund` |
| `DeliveryDateTypeRule` | `kna1.delivery_date_rule` |
| `ExpressTrainStationName` | `kna1.bahne` |
| `TrainStationName` | `kna1.bahns` |
| `InternationalLocationNumber2` | `kna1.bbsnr` |
| `InternationalLocationNumber3` | `kna1.bubkz` |
| `CityCode` | `kna1.cityc` |
| `County` | `kna1.counc` |
| `CustomerHasUnloadingPoint` | `kna1.exabl` |
| `CustomerWorkingTimeCalendar` | `kna1.knazk` |
| `IsCompetitor` | `kna1.dear1` |
| `TaxInvoiceRepresentativeName` | `j_1kfrepre` |
| `BusinessType` | `j_1kftbus` |
| `IndustryType` | `j_1kftind` |
| `TW_CollvBillingIsSupported` | `consolidate_invoice` |
| `AlternativePayeeIsAllowed` | `xzemp` |
| `FreeDefinedAttribute01` | `katr1` |
| `FreeDefinedAttribute02` | `katr2` |
| `FreeDefinedAttribute03` | `katr3` |
| `FreeDefinedAttribute04` | `katr4` |
| `FreeDefinedAttribute05` | `katr5` |
| `FreeDefinedAttribute06` | `katr6` |
| `FreeDefinedAttribute07` | `katr7` |
| `FreeDefinedAttribute08` | `katr8` |
| `FreeDefinedAttribute09` | `katr9` |
| `FreeDefinedAttribute10` | `katr10` |
| `PaymentReason` | `kna1.paytrsn` |
| `CustomerConditionGroup1` | `kna1.kdkg1` |
| `CustomerConditionGroup2` | `kna1.kdkg2` |
| `CustomerConditionGroup3` | `kna1.kdkg3` |
| `CustomerConditionGroup4` | `kna1.kdkg4` |
| `CustomerConditionGroup5` | `kna1.kdkg5` |
| `IsSalesProspect` | `kna1.dear3` |
| `PaymentIsBlockedForCustomer` | `kna1.sperz` |
| `IsConsumer` | `kna1.dear6` |
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
| `BusinessPartnerName1` | `_AddressDefaultRepresentation.AddresseeName1` |
| `BusinessPartnerName2` | `_AddressDefaultRepresentation.AddresseeName2` |
| `BusinessPartnerName3` | `_AddressDefaultRepresentation.AddresseeName3` |
| `BusinessPartnerName4` | `_AddressDefaultRepresentation.AddresseeName4` |
| `BPAddrCityName` | `_AddressDefaultRepresentation.CityName` |
| `BPAddrStreetName` | `_AddressDefaultRepresentation.StreetName` |
| `AddressSearchTerm1` | `_AddressDefaultRepresentation.AddressSearchTerm1` |
| `AddressSearchTerm2` | `_AddressDefaultRepresentation.AddressSearchTerm2` |
| `DistrictName` | `_AddressDefaultRepresentation.DistrictName` |
| `POBoxDeviatingCityName` | `_AddressDefaultRepresentation.POBoxDeviatingCityName` |
| `BusinessPartnerFormOfAddress` | `_AddressDefaultRepresentation.FormOfAddress` |
| `BR_ICMSTaxPayerType` | `kna1.icmstaxpay` |
| `_CustomerToBusinessPartner` | *Association* |
| `_CorrespondingSupplier` | *Association* |
| `_CustomerAccountGroupText` | *Association* |
| `_CustomerClassification` | *Association* |
| `_CustomerClassificationText` | *Association* |
| `_CustomerCompany` | *Association* |
| `_CustomerSalesArea` | *Association* |
| `_CreatedByUser` | *Association* |
| `_StandardAddress` | *Association* |
| `_CustomerSalesAreaTax` | *Association* |
| `_CustomerAddr` | *Association* |
| `_CustomerAddrSalesAreaTax` | *Association* |
| `_ContactPerson` | *Association* |
| `_CustomerHierarchyNode` | *Association* |
| `_GlobalCompany` | *Association* |
| `_AddressDefaultRepresentation` | *Association* |
| `_AddressRepresentation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerToBusinessPartner` | `I_CustomerToBusinessPartner` | [1..1] |
| `_CorrespondingSupplier` | `I_Supplier` | [0..1] |
| `_CustomerAccountGroupText` | `I_CustomerAccountGroupText` | [0..*] |
| `_CustomerClassification` | `I_CustomerClassification` | [0..1] |
| `_CustomerClassificationText` | `I_CustomerClassificationText` | [0..*] |
| `_CustomerCompany` | `I_CustomerCompany` | [1..*] |
| `_CustomerSalesArea` | `I_CustomerSalesArea` | [1..*] |
| `_CreatedByUser` | `I_User` | [1..1] |
| `_StandardAddress` | `I_Address` | [1..1] |
| `_CustomerSalesAreaTax` | `I_CustSalesAreaTax` | [1..*] |
| `_CustomerExt` | `E_Customer` | [0..1] |
| `_CustomerAddr` | `I_CustAddrDepdntInformation` | [1..*] |
| `_CustomerAddrSalesAreaTax` | `I_CustSlsAreaAddrDepdntTaxInfo` | [1..*] |
| `_ContactPerson` | `I_ContactPerson` | [0..*] |
| `_CustomerHierarchyNode` | `I_CustUnivHierarchyNode` | [0..*] |
| `_GlobalCompany` | `I_Globalcompany` | [0..1] |
| `_AddressDefaultRepresentation` | `I_OrganizationAddress` | [0..1] |
| `_AddressRepresentation` | `I_Address_2` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'I_CUSTOMER_CDS'
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: 'IsBusinessPurposeCompleted'
@AccessControl.privilegedAssociations: [ '_StandardAddress', '_AddressDefaultRepresentation','_AddressRepresentation']
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
    mapping:[
               {
                    table: 'KNA1', role: #MAIN,
                    viewElement: ['Customer'],
                    tableElement: ['kunnr']
                },
                {
                    table: 'ADRC', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['AddressID'],
                    tableElement: ['Addrnumber']
                }
             ]   
    }
  }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Customer'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'Customer'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'Customer'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_Customer
  as select from kna1
  association [1..1] to I_CustomerToBusinessPartner    as _CustomerToBusinessPartner    on  $projection.Customer = _CustomerToBusinessPartner.Customer
  association [0..1] to I_Supplier                     as _CorrespondingSupplier        on  _CorrespondingSupplier.Supplier = $projection.Supplier
  association [0..*] to I_CustomerAccountGroupText     as _CustomerAccountGroupText     on  $projection.CustomerAccountGroup = _CustomerAccountGroupText.CustomerAccountGroup
  association [0..1] to I_CustomerClassification       as _CustomerClassification       on  $projection.CustomerClassification = _CustomerClassification.CustomerClassification
  association [0..*] to I_CustomerClassificationText   as _CustomerClassificationText   on  $projection.CustomerClassification = _CustomerClassificationText.CustomerClassification
  association [1..*] to I_CustomerCompany              as _CustomerCompany              on  $projection.Customer = _CustomerCompany.Customer
  association [1..*] to I_CustomerSalesArea            as _CustomerSalesArea            on  $projection.Customer = _CustomerSalesArea.Customer
  association [1..1] to I_User                         as _CreatedByUser                on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [1..1] to I_Address                      as _StandardAddress              on  $projection.AddressID = _StandardAddress.AddressID
  association [1..*] to I_CustSalesAreaTax             as _CustomerSalesAreaTax         on  $projection.Customer = _CustomerSalesAreaTax.Customer
  association [0..1] to E_Customer                     as _CustomerExt                  on  $projection.Customer = _CustomerExt.Customer
  association [1..*] to I_CustAddrDepdntInformation    as _CustomerAddr                 on  $projection.Customer = _CustomerAddr.Customer
  association [1..*] to I_CustSlsAreaAddrDepdntTaxInfo as _CustomerAddrSalesAreaTax     on  $projection.Customer = _CustomerAddrSalesAreaTax.Customer
  association [0..*] to I_ContactPerson                as _ContactPerson                on  $projection.Customer = _ContactPerson.Customer
  association [0..*] to I_CustUnivHierarchyNode        as _CustomerHierarchyNode        on  $projection.Customer = _CustomerHierarchyNode.Customer
  association [0..1] to I_Globalcompany                as _GlobalCompany                on  $projection.TradingPartner = _GlobalCompany.Company
  // association [1..1] to I_BusinessPartnerAddress       as _BusinessPartnerAddress   on $projection.BusinessPartner = _BusinessPartnerAddress.BusinessPartner
  //            and $projection.AddressID =  _BusinessPartnerAddress.AddressNumber
  association [0..1] to I_OrganizationAddress          as _AddressDefaultRepresentation on  $projection.AddressID                                   = _AddressDefaultRepresentation.AddressID
                                                                                        and _AddressDefaultRepresentation.AddressRepresentationCode is initial
  association [0..1] to I_Address_2                    as _AddressRepresentation        on  $projection.AddressID                            = _AddressRepresentation.AddressID
                                                                                        and _AddressRepresentation.AddressRepresentationCode is initial
                                                                                        and _AddressRepresentation.AddressPersonID is initial
{
      //Key 
      @ObjectModel.text.element: ['CustomerName']
      @ObjectModel: {
        hierarchy.association: '_CustomerHierarchyNode'
      }
  key cast(kna1.kunnr as kunnr preserving type)                                                                   as Customer,
      //@VDM.deprecated:true
      //Please use from association as _CustomerToBusinessPartner._BusinessPartner.BusinessPartner instead
      //_cvi._BusinessPartner.BusinessPartner,
      //@VDM.deprecated:true
      //Please use from association as _CustomerToBusinessPartner.BusinessPartnerUUID instead
      //_cvi.BusinessPartnerUUID,

      // _CustomerToBusinessPartner._BusinessPartner.BusinessPartner                                                 as BusinessPartner,
      @Semantics.text:true
      cast(substring(rtrim(replace(concat(name1, concat(' &@', name2)), '&@', ''),' '),1,80) as md_customer_name) as CustomerName,
      cast(concat( concat( concat( concat( concat( concat_with_space( anred, name1, 1 ), name2 ), name3 ), name4 ), '/' ),
              concat_with_space(pstlz, ort01, 1 ) ) as md_customer_full_name)                                     as CustomerFullName, //KF: different with S4
       
      //@Semantics.text:true
      @EndUserText.label: 'Business Partner - Customer Name'
      cast(substring(rtrim(replace(concat(_AddressDefaultRepresentation.AddresseeName1, concat(' &@', _AddressDefaultRepresentation.AddresseeName2)), '&@', ''),' '),1,81) as customername_2) as BPCustomerName, 
      @EndUserText.label: 'Business Partner - Customer Full Name'
      cast(concat( concat_with_space( concat_with_space( concat_with_space(_AddressDefaultRepresentation.AddresseeName1, _AddressDefaultRepresentation.AddresseeName2,1 ), _AddressDefaultRepresentation.AddresseeName3,1 ), _AddressDefaultRepresentation.AddresseeName4,1 ), ' ' ) as md_customer_full_name) as BPCustomerFullName, 
      kna1.ernam                                                                                                  as CreatedByUser,
      kna1.erdat                                                                                                  as CreationDate,
      kna1.adrnr                                                                                                  as AddressID,
      @ObjectModel.foreignKey.association:'_CustomerClassification'
      @ObjectModel.text.association: '_CustomerClassificationText'
      kna1.kukla                                                                                                  as CustomerClassification,
      kna1.stceg                                                                                                  as VATRegistration,
      kna1.ktokd                                                                                                  as CustomerAccountGroup,
      kna1.begru                                                                                                  as AuthorizationGroup,
      kna1.lifsd                                                                                                  as DeliveryIsBlocked,
      kna1.sperr                                                                                                  as PostingIsBlocked,
      kna1.faksd                                                                                                  as BillingIsBlockedForCustomer, // Used in CDS based Customer Object Page
      kna1.aufsd                                                                                                  as OrderIsBlockedForCustomer, //Used in CDS based Customer Object Page
      @EndUserText.quickInfo: 'International Location Number (Part 1)'
      kna1.bbbnr                                                                                                  as InternationalLocationNumber1, //Used in CDS based Customer Object Page
      kna1.xcpdk                                                                                                  as IsOneTimeAccount,
      kna1.txjcd                                                                                                  as TaxJurisdiction,
      kna1.brsch                                                                                                  as Industry,
      kna1.stcdt                                                                                                  as TaxNumberType,
      kna1.stcd1                                                                                                  as TaxNumber1, // same as kna1.stcd1 ?
      kna1.stcd2                                                                                                  as TaxNumber2, // same as kna1.stcd2 ?
      kna1.stcd3                                                                                                  as TaxNumber3,
      kna1.stcd4                                                                                                  as TaxNumber4,
      kna1.stcd5                                                                                                  as TaxNumber5,
      kna1.stcd6                                                                                                  as TaxNumber6,
      kna1.konzs                                                                                                  as CustomerCorporateGroup,
      kna1.lifnr                                                                                                  as Supplier,
      kna1.niels                                                                                                  as NielsenRegion,
      kna1.bran1                                                                                                  as IndustryCode1,
      kna1.bran2                                                                                                  as IndustryCode2,
      kna1.bran3                                                                                                  as IndustryCode3,
      kna1.bran4                                                                                                  as IndustryCode4,
      kna1.bran5                                                                                                  as IndustryCode5,
      kna1.land1                                                                                                  as Country,
      kna1.name1                                                                                                  as OrganizationBPName1,
      kna1.name2                                                                                                  as OrganizationBPName2,
      kna1.ort01                                                                                                  as CityName,
      kna1.pstlz                                                                                                  as PostalCode,
      kna1.stras                                                                                                  as StreetName,
      kna1.sortl                                                                                                  as SortField,
      kna1.telfx                                                                                                  as FaxNumber,
      kna1.suframa                                                                                                as BR_SUFRAMACode,      
      kna1.regio                                                                                                  as Region,
      kna1.telf1                                                                                                  as TelephoneNumber1,
      kna1.telf2                                                                                                  as TelephoneNumber2,
      kna1.knrza                                                                                                  as AlternativePayerAccount,
      kna1.dtams                                                                                                  as DataMediumExchangeIndicator,
      kna1.stkzu                                                                                                  as VATLiability,
      kna1.cvp_xblck                                                                                              as IsBusinessPurposeCompleted,
      kna1.fityp                                                                                                  as ResponsibleType,
      kna1.fiskn                                                                                                  as FiscalAddress,
      kna1.stkzn                                                                                                  as NFPartnerIsNaturalPerson,
      kna1.loevm                                                                                                  as DeletionIndicator,
      kna1.spras                                                                                                  as Language,
      @ObjectModel.foreignKey.association:'_GlobalCompany'
      kna1.vbund                                                                                                  as TradingPartner,
      kna1.delivery_date_rule                                                                                     as DeliveryDateTypeRule,
      kna1.bahne                                                                                                  as ExpressTrainStationName,
      kna1.bahns                                                                                                  as TrainStationName,
      @EndUserText.quickInfo: 'International Location Number (Part 2)'
      kna1.bbsnr                                                                                                  as InternationalLocationNumber2,
      kna1.bubkz                                                                                                  as InternationalLocationNumber3,
      kna1.cityc                                                                                                  as CityCode,
      kna1.counc                                                                                                  as County,
      kna1.exabl                                                                                                  as CustomerHasUnloadingPoint,
      kna1.knazk                                                                                                  as CustomerWorkingTimeCalendar,
      kna1.dear1                                                                                                  as IsCompetitor,
      j_1kfrepre                                                                                                  as TaxInvoiceRepresentativeName,
      j_1kftbus                                                                                                   as BusinessType,
      j_1kftind                                                                                                   as IndustryType,
      consolidate_invoice                                                                                         as TW_CollvBillingIsSupported,

      xzemp                                                                                                       as AlternativePayeeIsAllowed,

      katr1                                                                                                       as FreeDefinedAttribute01,
      katr2                                                                                                       as FreeDefinedAttribute02,
      katr3                                                                                                       as FreeDefinedAttribute03,
      katr4                                                                                                       as FreeDefinedAttribute04,
      katr5                                                                                                       as FreeDefinedAttribute05,
      katr6                                                                                                       as FreeDefinedAttribute06,
      katr7                                                                                                       as FreeDefinedAttribute07,
      katr8                                                                                                       as FreeDefinedAttribute08,
      katr9                                                                                                       as FreeDefinedAttribute09,
      katr10                                                                                                      as FreeDefinedAttribute10,
      kna1.paytrsn                                                                                                as PaymentReason,

      // Added Additional Fields
      kna1.kdkg1                                                                                                  as CustomerConditionGroup1,
      kna1.kdkg2                                                                                                  as CustomerConditionGroup2,
      kna1.kdkg3                                                                                                  as CustomerConditionGroup3,
      kna1.kdkg4                                                                                                  as CustomerConditionGroup4,
      kna1.kdkg5                                                                                                  as CustomerConditionGroup5,
      // kna1.anred                                                                                                  as TitleCustomer,
      // kna1.datlt                                                                                                  as BPDataCommunicationPhoneNumber,
      // kna1.locco                                                                                                  as CityCoordinates,
      // kna1.name3                                                                                                  as CustomerName3,
      // kna1.name4                                                                                                  as CustomerName4,
      // kna1.ort02                                                                                                  as CustomerDistrict,
      // kna1.pfach                                                                                                  as CustomerPostOfficeBox,
      // kna1.pstl2                                                                                                  as PostalCodeForCustomer,
      // kna1.rpmkr                                                                                                  as CustomerRegionalMarket,
      // kna1.telbx                                                                                                  as CustomerTelephoneBoxNumber,
      // kna1.teltx                                                                                                  as CustomerTeletexNumber,
      // kna1.telx1                                                                                                  as CustomerTelexNumber,
      // kna1.lzone                                                                                                  as CustomerTransportationZone,
      // kna1.dear2                                                                                                  as IsSalesPartner,
      @Semantics.booleanIndicator
      kna1.dear3                                                                                                  as IsSalesProspect,
      // kna1.dear5                                                                                                  as IsDefaultSoldToParty,
      //  kna1.gform                                                                                                  as CustomerLegalStatus,
      //  kna1.ekont                                                                                                  as CustomerInitialContact,
      //   kna1.umsat                                                                                                  as CustomerAnnualSales,
      //   kna1.umjah                                                                                                  as YearForWhichSalesGiven,
      //  kna1.uwaer                                                                                                  as CurrencyOfSalesFigure,
      //   kna1.jmzah                                                                                                  as CustYearlyNumberOfEmployees,
      //  kna1.jmjah                                                                                                  as EmployeesNumberGivenForYear,
      //  kna1.umsa1                                                                                                  as AnnualSalesForCustomer,
      //   kna1.periv                                                                                                  as CustomerFiscalYearVariant,
      //   kna1.abrvw                                                                                                  as CustomerUsageIndication,
      //   kna1.inspbydebi                                                                                             as InspectionCarriedOutByCustomer,
      //   kna1.inspatdebi                                                                                             as DeliveryNoteInspectionOutBound,
      //   kna1.ktocd                                                                                                  as CustomerReferenceAccountGroup,
      //    kna1.pfort                                                                                                  as CustomerPostOfficeBoxCity,
      //   kna1.werks                                                                                                  as CustomerPlant,
      //   kna1.dtaws                                                                                                  as DataMediumExchangeKey,
      //   kna1.duefl                                                                                                  as StatusOfDataTransfer,
      //    kna1.hzuor                                                                                                  as HierarchyAssignment,
      kna1.sperz                                                                                                  as PaymentIsBlockedForCustomer,
      //   kna1.etikg                                                                                                  as CustomerOrPlantGroupLabelling,
      //   kna1.civve                                                                                                  as CustomerIsForCivilUse,
      //    kna1.milve                                                                                                  as CustomerIdentityForMilitaryUse,
      //      kna1.xicms                                                                                                  as CustomerExempt1,
      //      kna1.xxipi                                                                                                  as CustomerExempt,
      //     kna1.xsubt                                                                                                  as CustomerGroupForCalculation,
      //     kna1.cfopc                                                                                                  as CustomerCategory,
      //     kna1.txlw1                                                                                                  as CustomerTaxLaw1,
      //     kna1.txlw2                                                                                                  as CustomerTaxLaw,
      //    kna1.cassd                                                                                                  as CustomerCentralSalesBlock,
      //     kna1.knurl                                                                                                  as UniformResourceLocatorForCust,
      //     kna1.confs                                                                                                  as StatusOfChangeAuthorization,
      //     kna1.updat                                                                                                  as ChangesConfirmedDate,
      //     kna1.uptim                                                                                                  as LastChangeConfirmationTime, 
      //     kna1.nodel                                                                                                  as CustomerCentralDeletionIsBlock,
      //     kna1.stkza                                                                                                  as BPSubjectToEqualizationTax,
      //      kna1.dear4                                                                                                  as CustomerType4,
      //      kna1.xknza                                                                                                  as AlternativePayerUsingAccount,
      //      kna1.ccc01                                                                                                  as BioChemicalWarfareLegal,
      //     kna1.ccc02                                                                                                  as NuclearNonProliferationLegal,
      //      kna1.ccc03                                                                                                  as NationalSecurityLegalControl,
      //      kna1.ccc04                                                                                                  as MissileTechnologyLegalControl,
      kna1.dear6                                                                                                  as IsConsumer,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      kna1.xdcset                                                                                                 as DataControllerSet,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      kna1.data_ctrlr1                                                                                            as DataController1,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      kna1.data_ctrlr2                                                                                            as DataController2,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      kna1.data_ctrlr3                                                                                            as DataController3,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      kna1.data_ctrlr4                                                                                            as DataController4,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      kna1.data_ctrlr5                                                                                            as DataController5,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      kna1.data_ctrlr6                                                                                            as DataController6,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      kna1.data_ctrlr7                                                                                            as DataController7,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      kna1.data_ctrlr8                                                                                            as DataController8,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      kna1.data_ctrlr9                                                                                            as DataController9,
//added only for DCL check
    @UI.hidden: true
    @Consumption.filter.hidden: true      
      kna1.data_ctrlr10                                                                                           as DataController10,
      @EndUserText.label: 'Business Partner Organization  - Name 1'
      _AddressDefaultRepresentation.AddresseeName1                                                                as BusinessPartnerName1,
      @EndUserText.label: 'Business Partner Organization  - Name 2'
      _AddressDefaultRepresentation.AddresseeName2                                                                as BusinessPartnerName2,
      @EndUserText.label: 'Business Partner Organization  - Name 3'
      _AddressDefaultRepresentation.AddresseeName3                                                                as BusinessPartnerName3,
      @EndUserText.label: 'Business Partner Organization  - Name 4'
      _AddressDefaultRepresentation.AddresseeName4                                                                as BusinessPartnerName4,
      @EndUserText.label: 'Business Partner Address – City'
      _AddressDefaultRepresentation.CityName                                                                      as BPAddrCityName,
      @EndUserText.label: 'Business Partner Address – Street'
      _AddressDefaultRepresentation.StreetName                                                                    as BPAddrStreetName,
      @EndUserText.label: 'Business Partner Address - Search Term 1'                                               
      _AddressDefaultRepresentation.AddressSearchTerm1                                                            as AddressSearchTerm1, 
      @EndUserText.label: 'Business Partner Address - Search Term 2' 
      _AddressDefaultRepresentation.AddressSearchTerm2                                                            as AddressSearchTerm2, 
      @EndUserText.label: 'Business Partner Address – District'                                                              
      _AddressDefaultRepresentation.DistrictName                                                                  as DistrictName, 
      @EndUserText.label: 'Business Partner Address - PO Box Deviating City'                                                              
      _AddressDefaultRepresentation.POBoxDeviatingCityName                                                        as POBoxDeviatingCityName ,
      @EndUserText.label: 'Business Partner - Form of Address'
      _AddressDefaultRepresentation.FormOfAddress                                                                 as BusinessPartnerFormOfAddress,
      kna1.icmstaxpay                                                                                             as BR_ICMSTaxPayerType,
      //Associations
      _CustomerToBusinessPartner,
      _StandardAddress,
      _AddressDefaultRepresentation,
      _AddressRepresentation,
      _CreatedByUser,
      _CorrespondingSupplier,
      _CustomerClassification,
      _CustomerClassificationText,
      _CustomerAccountGroupText,
      _CustomerCompany,
      _CustomerSalesArea,
      _CustomerSalesAreaTax,
      _CustomerAddr,
      _CustomerAddrSalesAreaTax,
      _ContactPerson,
      _CustomerHierarchyNode,
      _GlobalCompany
      //   _BusinessPartnerAddress   
}
```
