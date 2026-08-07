---
name: I_SALESCONTRACTITEMFLFMTCUBE
description: Salescontractitemflfmtcube
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - analytical
  - sales-contract
  - contract
  - item-level
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTITEMFLFMTCUBE

**Salescontractitemflfmtcube**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesContract` | ✓ | |  | `cast( SCIA.SalesDocument as sales_contract preserving type )` |
| `SalesContractItem` | ✓ | |  | `cast( SCIA.SalesDocumentItem as sales_contract_item preserving type )` |
| `SalesContractType` |  | |  | `SalesDocumentType` |
| `CreationDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `SalesContractValidityStartDate` |  | |  | `AgrmtValdtyStartDate` |
| `SalesContractValidityEndDate` |  | |  | `AgrmtValdtyEndDate` |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `OrganizationDivision` |  | |  | `cast(SCIA.OrganizationDivision as organization_division preserving type )` |
| `SalesGroup` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `PartnerCompany` |  | |  | `TradingPartner` |
| `SoldToParty` |  | |  |  |
| `ResponsibleEmployee` |  | |  |  |
| `SalesEmployee` |  | |  |  |
| `Material` |  | |  |  |
| `Product` |  | |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` |
| `SalesContractTargetValue` |  | |  | `cast (currency_conversion( amount => SCIA.SalesContractTargetValue, source_currency => SCIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SCIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as sales_contract_target_value)` |
| `SalesContractTargetAmountInDC` |  | |  | `cast( currency_conversion( amount => SCIA.SalesContractTargetAmount, source_currency => SCIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SCIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as sls_contr_tgt_val_in_dc )` |
| `ReleasedNetAmount` |  | |  | `cast( ReleasedSalesContract.SalesContractReleasedAmount as reld_sls_contr_tgt_val )` |
| `SalesContractReleasedAmtInDC` |  | |  | `cast( ReleasedSalesContract.SalesContractReleasedAmtInDC as reld_sls_contr_tgt_val_in_dc )` |
| `SlsContrPeriodElapsedPercent` |  | |  | `cast( case when SCIA.AgrmtValdtyStartDate = '00000000' then case when SCIA.AgrmtValdtyEndDate = '00000000' then case when SCIA.CreationDate = '99991231' then 1 else division(dats_days_between(SCIA.CreationDate, :P_Date),dats_days_between(SCIA.CreationDate,cast('99991231' as abap.dats(8))),5) end else case when SCIA.AgrmtValdtyEndDate = SCIA.CreationDate then 1 else division(dats_days_between(SCIA.CreationDate, :P_Date),dats_days_between(SCIA.CreationDate,SCIA.AgrmtValdtyEndDate),5) end end else case when SCIA.AgrmtValdtyEndDate = '00000000' then case when SCIA.AgrmtValdtyStartDate = '99991231' then 1 else division(dats_days_between(SCIA.AgrmtValdtyStartDate, :P_Date),dats_days_between(SCIA.AgrmtValdtyStartDate,cast('99991231' as abap.dats(8))),5) end else case when SCIA.AgrmtValdtyStartDate = SCIA.AgrmtValdtyEndDate then 1 else division(dats_days_between(SCIA.AgrmtValdtyStartDate, :P_Date),dats_days_between(SCIA.AgrmtValdtyStartDate,SCIA.AgrmtValdtyEndDate),5) end end end as sls_contr_period_elpsd_percent)` |
| `_SalesContract` | | ✓ | | |
| `_ResponsibleEmployee` | | ✓ | | |
| `_SalesEmployee` | | ✓ | | |
| `_SalesEmployee_2` | | ✓ | | |
| `_ResponsibleEmployee_2` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesContract` | `I_SalesContract` | [1..1] |
| `_ResponsibleEmployee` | `I_Employee` | [0..1] |
| `_SalesEmployee` | `I_Employee` | [0..1] |
| `_SalesEmployee_2` | `I_PersonWorkAgreement_1` | [0..1] |
| `_ResponsibleEmployee_2` | `I_PersonWorkAgreement_1` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Contract Fulfillment Rate - Cube'
@VDM.viewType: #COMPOSITE
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDSLSCONTRIC',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
  usageType: {
    dataClass:      #MIXED,
    serviceQuality: #D,
    sizeCategory:   #L
   }
}
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: 
   [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

define view I_SalesContractItemFlfmtCube
  with parameters
    P_Date : sydate,
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
as select from I_SalesContractItemAnalytics as SCIA
    left outer to one join P_ReleasedSalesContractItem( P_ExchangeRateType : $parameters.P_ExchangeRateType,
                                                      P_DisplayCurrency  : $parameters.P_DisplayCurrency) 
                                                    as ReleasedSalesContract on SCIA.SalesDocument     = ReleasedSalesContract.SalesContract
                                                                            and SCIA.SalesDocumentItem = ReleasedSalesContract.SalesContractItem  
                                                                            and SCIA.SalesOrganization = ReleasedSalesContract.SalesOrganization  
                                                                            and SCIA.DistributionChannel = ReleasedSalesContract.DistributionChannel  
                                                                            and SCIA.OrganizationDivision = ReleasedSalesContract.OrganizationDivision  
                                                                            
association [1..1] to I_SalesContract               as _SalesContract       on $projection.SalesContract = _SalesContract.SalesContract
association [0..1] to I_Employee                    as _ResponsibleEmployee on $projection.ResponsibleEmployee = _ResponsibleEmployee.PersonnelNumber
association [0..1] to I_Employee                    as _SalesEmployee       on $projection.SalesEmployee = _SalesEmployee.PersonnelNumber

association [0..1] to I_PersonWorkAgreement_1       as _SalesEmployee_2       on $projection.SalesEmployee = _SalesEmployee_2.PersonWorkAgreement
association [0..1] to I_PersonWorkAgreement_1       as _ResponsibleEmployee_2 on $projection.ResponsibleEmployee = _ResponsibleEmployee_2.PersonWorkAgreement


//Extensibility
association [0..1] to E_SalesDocumentItemBasic      as _Extension           on $projection.SalesContract = _Extension.SalesDocument
                                                                           and $projection.SalesContractItem = _Extension.SalesDocumentItem
{
      // Keys
      @ObjectModel.foreignKey.association: '_SalesContract'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesContractStdVH', element: 'SalesContract' } } ]
  key cast( SCIA.SalesDocument as sales_contract preserving type )                                            as  SalesContract,
      _SalesContract,
  key cast( SCIA.SalesDocumentItem as sales_contract_item preserving type )                                   as  SalesContractItem,

      // Category
      SCIA.SalesDocumentType                                                                                  as  SalesContractType,

      // Admin
      @Semantics.systemDate.createdAt: true
      SCIA.CreationDate,
      SCIA.CreatedByUser,
      SCIA._CreatedByUser,
      @Semantics.businessDate.from: true
      SCIA.AgrmtValdtyStartDate                                                                               as  SalesContractValidityStartDate,
      @Semantics.businessDate.to: true
      SCIA.AgrmtValdtyEndDate                                                                                 as  SalesContractValidityEndDate,
      
      // Orgnization
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SCIA.SalesOrganization,
      SCIA._SalesOrganization,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      SCIA.DistributionChannel,
      SCIA._DistributionChannel,

      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      cast(SCIA.OrganizationDivision as organization_division preserving type )                               as  OrganizationDivision,
      SCIA._OrganizationDivision,

      @ObjectModel.foreignKey.association: '_SalesGroup'
      SCIA.SalesGroup,
      SCIA._SalesGroup,

      @ObjectModel.foreignKey.association: '_SalesOffice'
      SCIA.SalesOffice,
      SCIA._SalesOffice,
      
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association:'_GlobalCompany'
      SCIA._SoldToParty.TradingPartner as PartnerCompany,
      SCIA._SoldToParty._GlobalCompany,

      // Sales
      @ObjectModel.foreignKey.association: '_SoldToParty'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      SCIA.SoldToParty,
      SCIA._SoldToParty,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ResponsibleEmployee_2'
      SCIA.ResponsibleEmployee,
      _ResponsibleEmployee_2,
      @API.element.releaseState:    #DEPRECATED
      @API.element.successor: '_ResponsibleEmployee_2'      
      _ResponsibleEmployee,
        
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesEmployee_2'
      SCIA.SalesEmployee,
      _SalesEmployee_2,
      @API.element.releaseState:    #DEPRECATED
      @API.element.successor: '_SalesEmployee_2'         
      _SalesEmployee,

      // Product
      @API.element.releaseState:    #DEPRECATED
      @API.element.successor: 'Product'
      SCIA.Material,

      @ObjectModel.foreignKey.association: '_Product'
      SCIA.Product,
      SCIA._Product,
      
      // Status
      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      SCIA.SDDocumentRejectionStatus,
      SCIA._SDDocumentRejectionStatus,
      
      //Currency
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      SCIA.TransactionCurrency,
      SCIA._TransactionCurrency,
      
      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as vdm_v_display_currency) as DisplayCurrency,
      
      
      // KPI: Measure   
      @API.element.releaseState:    #DEPRECATED
      @API.element.successor: 'SalesContractTargetAmountInDC'      
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast (currency_conversion(
        amount => SCIA.SalesContractTargetValue,
        source_currency => SCIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SCIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as sales_contract_target_value) as  SalesContractTargetValue,
      
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => SCIA.SalesContractTargetAmount,
        source_currency => SCIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SCIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as sls_contr_tgt_val_in_dc ) as SalesContractTargetAmountInDC,
     
      @API.element.releaseState:    #DEPRECATED
      @API.element.successor: 'SalesContractReleasedAmtInDC'         
      @DefaultAggregation: #SUM 
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( ReleasedSalesContract.SalesContractReleasedAmount as reld_sls_contr_tgt_val ) as ReleasedNetAmount,
      
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( ReleasedSalesContract.SalesContractReleasedAmtInDC as reld_sls_contr_tgt_val_in_dc ) as SalesContractReleasedAmtInDC,            
       
      @DefaultAggregation: #MAX
      cast(
          case when
              SCIA.AgrmtValdtyStartDate = '00000000'
          then
              case when
                  SCIA.AgrmtValdtyEndDate = '00000000'
              then
                  case when
                      SCIA.CreationDate = '99991231'
                  then
                      1
                  else
      //today - create / 99991231 - create
                      division(dats_days_between(SCIA.CreationDate, :P_Date),dats_days_between(SCIA.CreationDate,cast('99991231' as abap.dats(8))),5)
                  end
              else
                  case when
                      SCIA.AgrmtValdtyEndDate = SCIA.CreationDate
                  then
                      1
                  else
      //today - create / enddate -  create
                      division(dats_days_between(SCIA.CreationDate, :P_Date),dats_days_between(SCIA.CreationDate,SCIA.AgrmtValdtyEndDate),5)
                  end
              end
          else
              case when
                  SCIA.AgrmtValdtyEndDate = '00000000'
              then
                  case when
                      SCIA.AgrmtValdtyStartDate = '99991231'
                  then
                      1
                  else
      //today - startdate / 99991231 - startdate
                      division(dats_days_between(SCIA.AgrmtValdtyStartDate, :P_Date),dats_days_between(SCIA.AgrmtValdtyStartDate,cast('99991231' as abap.dats(8))),5)
                  end
              else
                  case when
                      SCIA.AgrmtValdtyStartDate = SCIA.AgrmtValdtyEndDate
                  then
                      1
                  else
      //today - startdate / enddate - startdate
                      division(dats_days_between(SCIA.AgrmtValdtyStartDate, :P_Date),dats_days_between(SCIA.AgrmtValdtyStartDate,SCIA.AgrmtValdtyEndDate),5)
                  end
              end
          end
      as sls_contr_period_elpsd_percent)        as  SlsContrPeriodElapsedPercent

}
where  SCIA.SDDocumentCategory = 'G'
  and  SCIA.AgrmtValdtyStartDate <= :P_Date
  and (SCIA.AgrmtValdtyEndDate =  '00000000' or SCIA.AgrmtValdtyEndDate >= :P_Date)
  and  SCIA.TotalNetAmount != 0
  and  SCIA.TotalNetAmount is not null
  and  SCIA.SDDocReferenceStatus != ''
  and  SCIA.CompletionRule != ''
  and  SCIA.StatisticalValueControl =  ''

// Filter criteria:
// 1. Input parameter P_Date is in validity period of Contract
// 2. Contract is not fully released
// 3. Contract overall status is not completed
// 4. Contract header level net amount > 0
```
