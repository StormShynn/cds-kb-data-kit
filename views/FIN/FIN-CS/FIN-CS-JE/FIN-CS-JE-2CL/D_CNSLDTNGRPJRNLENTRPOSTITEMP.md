---
name: D_CNSLDTNGRPJRNLENTRPOSTITEMP
description: D Cnsldtngrpjrnlentrpostitemp
app_component: FIN-CS-JE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-JE
  - item-level
  - component:FIN-CS-JE-2CL
  - lob:Other
---
# D_CNSLDTNGRPJRNLENTRPOSTITEMP

**D Cnsldtngrpjrnlentrpostitemp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-JE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `abap.char(1)` |  | |  | `key DummyKey : abap.char(1)` |
| `ConsolidationPostingItem` |  | |  | `docln6` |
| `FinancialStatementItem` |  | |  | `fc_item` |
| `ConsolidationVersion` |  | |  | `fc_rvers` |
| `SubItem` |  | |  | `fc_sitem` |
| `AmountInLocalCurrency` |  | |  | `vlcur12` |
| `LocalCurrency` |  | |  | `lcurr` |
| `AmountInGroupCurrency` |  | |  | `vgcur12` |
| `GroupCurrency` |  | |  | `gcurr` |
| `AmountInTransactionCurrency` |  | |  | `vtcur12` |
| `TransactionCurrency` |  | |  | `rtcur` |
| `PartnerConsolidationUnit` |  | |  | `fincs_partnerconsolidationunit` |
| `ConsolidationUnit` |  | |  | `fincs_consolidationunit` |
| `BaseUnit` |  | |  | `meins` |
| `Quantity` |  | |  | `fincs_quan` |
| `Company` |  | |  | `rcomp_d` |
| `CompanyCode` |  | |  | `obukr` |
| `BusinessTransactionType` |  | |  | `glvor` |
| `ControllingArea` |  | |  | `kokrs` |
| `CostCenter` |  | |  | `kostl` |
| `GLAccount` |  | |  | `racct` |
| `ProfitCenter` |  | |  | `prctr` |
| `BusinessArea` |  | |  | `gsber` |
| `PartnerCostCenter` |  | |  | `skost` |
| `PartnerProfitCenter` |  | |  | `pprctr` |
| `AssignmentReference` |  | |  | `dzuonr` |
| `Segment` |  | |  | `fb_segment` |
| `PartnerFunctionalArea` |  | |  | `sfkber` |
| `PartnerBusinessArea` |  | |  | `pargb` |
| `PartnerCompany` |  | |  | `rassc` |
| `PartnerSegment` |  | |  | `fb_psegment` |
| `OrderID` |  | |  | `aufnr` |
| `Customer` |  | |  | `kunnr` |
| `FunctionalArea` |  | |  | `fkber` |
| `Supplier` |  | |  | `lifnr` |
| `Material` |  | |  | `matnr` |
| `Plant` |  | |  | `werks_d` |
| `FinancialTransactionType` |  | |  | `rmvct` |
| `BillingDocumentType` |  | |  | `fkart` |
| `SalesOrganization` |  | |  | `vkorg` |
| `DistributionChannel` |  | |  | `vtweg` |
| `OrganizationDivision` |  | |  | `spart` |
| `SoldMaterial` |  | |  | `fins_matnr_pa` |
| `MaterialGroup` |  | |  | `fins_matkl_mm` |
| `ProductGroup` |  | |  | `fins_matkl_pa` |
| `CustomerGroup` |  | |  | `kdgrp` |
| `CustomerSupplierCountry` |  | |  | `land1_gp` |
| `CustomerSupplierIndustry` |  | |  | `brsch` |
| `SalesDistrict` |  | |  | `bzirk` |
| `BillToParty` |  | |  | `kunre` |
| `ShipToParty` |  | |  | `kunwe` |
| `CustomerSupplierCorporateGroup` |  | |  | `konzs` |
| `FinancialServicesProductGroup` |  | |  | `fincs_finsrvcsproductgroup` |
| `FinancialServicesBranch` |  | |  | `fincs_financialservicesbranch` |
| `FinancialDataSource` |  | |  | `fincs_financialdatasource` |
| `FinancialManagementArea` |  | |  | `fincs_financialmanagementarea` |
| `Fund` |  | |  | `fincs_fund` |
| `GrantID` |  | |  | `fincs_grant` |
| `CnsldtnCashLedgerChartOfAccts` |  | |  | `fincs_cashledgerchartofaccts` |
| `CashLedgerAccount` |  | |  | `fincs_cashledgeraccount` |
| `PartnerFund` |  | |  | `fincs_partnerfund` |
| `GHGScope` |  | |  | `fincs_ghgscope` |
| `GHGCategory` |  | |  | `fincs_ghgcategory` |
| `GHGScope2CalculationMethod` |  | |  | `fincs_ghgscp2calculationmethod` |
| `GHGScope2ContractualInstrument` |  | |  | `fincs_ghgscp2cntrctlinstrument` |
| `SustainabilityModeOfTransport` |  | |  | `fincs_sustmodeoftransport` |
| `GHGDataQualityCharacteristic` |  | |  | `fincs_ghgdtaqltycharc` |
| `GHGEnergyClassification` |  | |  | `fincs_ghgenergyclassification` |
| `GHGEnergyMix` |  | |  | `fincs_ghgenergymix` |
| `GHGEnergySourcingType` |  | |  | `fincs_ghgenergysourcingtype` |
| `_DummyAssociation` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Consolidation Group JE line item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]

define abstract entity D_CnsldtnGrpJrnlEntrPostItemP
{
  key DummyKey                       : abap.char(1);
      ConsolidationPostingItem       : docln6;
      FinancialStatementItem         : fc_item;
      ConsolidationVersion           : fc_rvers;
      SubItem                        : fc_sitem;
      @Semantics.amount.currencyCode : 'LocalCurrency'
      AmountInLocalCurrency          : vlcur12;
      @Semantics.currencyCode        : true
      LocalCurrency                  : lcurr;
      @Semantics.amount.currencyCode : 'GroupCurrency'
      AmountInGroupCurrency          : vgcur12;
      @Semantics.currencyCode        : true
      GroupCurrency                  : gcurr;
      @Semantics.amount.currencyCode : 'TransactionCurrency'
      AmountInTransactionCurrency    : vtcur12;
      @Semantics.currencyCode        : true
      TransactionCurrency            : rtcur;
      PartnerConsolidationUnit       : fincs_partnerconsolidationunit;
      ConsolidationUnit              : fincs_consolidationunit;
      @Semantics.unitOfMeasure       : true
      BaseUnit                       : meins;
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      Quantity                       : fincs_quan;
      Company                        : rcomp_d;
      CompanyCode                    : obukr;
      BusinessTransactionType        : glvor;
      ControllingArea                : kokrs;
      CostCenter                     : kostl;
      GLAccount                      : racct;
      ProfitCenter                   : prctr;
      BusinessArea                   : gsber;
      PartnerCostCenter              : skost;
      PartnerProfitCenter            : pprctr;
      AssignmentReference            : dzuonr;
      Segment                        : fb_segment;
      PartnerFunctionalArea          : sfkber;
      PartnerBusinessArea            : pargb;
      PartnerCompany                 : rassc;
      PartnerSegment                 : fb_psegment;
      OrderID                        : aufnr;
      Customer                       : kunnr;
      FunctionalArea                 : fkber;
      Supplier                       : lifnr;
      Material                       : matnr;
      Plant                          : werks_d;
      FinancialTransactionType       : rmvct;
      BillingDocumentType            : fkart;
      SalesOrganization              : vkorg;
      DistributionChannel            : vtweg;
      OrganizationDivision           : spart;
      SoldMaterial                   : fins_matnr_pa;
      MaterialGroup                  : fins_matkl_mm;
      ProductGroup                   : fins_matkl_pa;
      CustomerGroup                  : kdgrp;
      CustomerSupplierCountry        : land1_gp;
      CustomerSupplierIndustry       : brsch;
      SalesDistrict                  : bzirk;
      BillToParty                    : kunre;
      ShipToParty                    : kunwe;
      CustomerSupplierCorporateGroup : konzs;
      -- *industry-specific fields* --
      -- financial services --
      FinancialServicesProductGroup  : fincs_finsrvcsproductgroup;
      FinancialServicesBranch        : fincs_financialservicesbranch;
      FinancialDataSource            : fincs_financialdatasource;
      -- public sector --
      FinancialManagementArea        : fincs_financialmanagementarea;
      Fund                           : fincs_fund;
      GrantID                        : fincs_grant;
      CnsldtnCashLedgerChartOfAccts  : fincs_cashledgerchartofaccts;
      CashLedgerAccount              : fincs_cashledgeraccount;
      PartnerFund                    : fincs_partnerfund;
      -- greenhouse gas --
      GHGScope                       : fincs_ghgscope;
      GHGCategory                    : fincs_ghgcategory;
      GHGScope2CalculationMethod     : fincs_ghgscp2calculationmethod;
      GHGScope2ContractualInstrument : fincs_ghgscp2cntrctlinstrument;
      SustainabilityModeOfTransport  : fincs_sustmodeoftransport;
      GHGDataQualityCharacteristic   : fincs_ghgdtaqltycharc;
      GHGEnergyClassification        : fincs_ghgenergyclassification;
      GHGEnergyMix                   : fincs_ghgenergymix;
      GHGEnergySourcingType          : fincs_ghgenergysourcingtype;
      _DummyAssociation              : association to parent D_CnsldtnGrpJrnlEntrPostP on $projection.DummyKey = _DummyAssociation.DummyKey;
}
```
