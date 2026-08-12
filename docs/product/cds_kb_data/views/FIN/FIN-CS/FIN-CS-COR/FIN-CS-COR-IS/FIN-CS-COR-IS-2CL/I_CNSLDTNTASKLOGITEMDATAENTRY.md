---
name: I_CNSLDTNTASKLOGITEMDATAENTRY
description: "Cnsldtntasklogitemdataentry"
app_component: FIN-CS-COR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - item-level
  - component:FIN-CS-COR-IS-2CL
  - lob:Other
---
# I_CNSLDTNTASKLOGITEMDATAENTRY

**Cnsldtntasklogitemdataentry**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnTaskLogUUID` | ✓ | |  |  |  |  |
| `CnsldtnTaskLogItemUUID` | ✓ | |  |  |  |  |
| `CnsldtnTaskLogItemType` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `PostingFiscalYear` |  | |  |  |  |  |
| `ConsolidationDocumentNumber` |  | |  |  |  |  |
| `ConsolidationVersion` |  | |  |  |  |  |
| `CnsldtnJrnlEntryAmtLoclCrcy` |  | |  |  |  |  |
| `CnsldtnJrnlEntryAmtInLoclCrcy` |  | |  |  |  |  |
| `CnsldtnJrnlEntryAmtGrpCrcy` |  | |  |  |  |  |
| `CnsldtnJrnlEntryAmtInGrpCrcy` |  | |  |  |  |  |
| `CnsldtnJrnlEntryAmtTransCrcy` |  | |  |  |  |  |
| `CnsldtnJrnlEntryAmtInTransCrcy` |  | |  |  |  |  |
| `CnsldtnJrnlEntryQtyBaseUnit` |  | |  |  |  |  |
| `CnsldtnJrnlEntryQtyInBsUnt` |  | |  |  |  |  |
| `CnsldtnTriggeringAmtLoclCrcy` |  | |  |  |  |  |
| `CnsldtnTriggeringAmtInLoclCrcy` |  | |  |  |  |  |
| `CnsldtnTriggeringAmtGrpCrcy` |  | |  |  |  |  |
| `CnsldtnTriggeringAmtInGrpCrcy` |  | |  |  |  |  |
| `CnsldtnTriggeringAmtTransCrcy` |  | |  |  |  |  |
| `CnsldtnTriggeringAmtInTC` |  | |  |  |  |  |
| `CnsldtnTriggeringQtyBaseUnit` |  | |  |  |  |  |
| `CnsldtnTriggeringQtyInBsUnt` |  | |  |  |  |  |
| `ConsolidationUnit` |  | |  |  |  |  |
| `ConsolidationChartOfAccounts` |  | |  |  |  |  |
| `CnsldtnFinancialStatementItem` |  | |  |  |  |  |
| `PartnerConsolidationUnit` |  | |  |  |  |  |
| `ConsolidationGroup` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `SubItemCategory` |  | |  |  |  |  |
| `SubItem` |  | |  |  |  |  |
| `PostingLevel` |  | |  |  |  |  |
| `ConsolidationApportionment` |  | |  |  |  |  |
| `CurrencyConversionsDiffType` |  | |  |  |  |  |
| `ConsolidationDocumentType` |  | |  |  |  |  |
| `InvesteeConsolidationUnit` |  | |  |  |  |  |
| `InvestmentActivityType` |  | |  |  |  |  |
| `InvestmentActivity` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PartnerCostCenter` |  | |  |  |  |  |
| `FinancialTransactionType` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `CnsldtnTskLgItmRowNmbr` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FinancialServicesBranch` |  | |  |  |  |  |
| `GHGScope2CalculationMethod` |  | |  |  |  |  |
| `CashLedgerAccount` |  | |  |  |  |  |
| `CnsldtnCashLedgerChartOfAccts` |  | |  |  |  |  |
| `GHGScope2ContractualInstrument` |  | |  |  |  |  |
| `CustomerSupplierCountry` |  | |  |  |  |  |
| `FinancialDataSource` |  | |  |  |  |  |
| `CnsldtnLogHeaderDateTime` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `GHGCategory` |  | |  |  |  |  |
| `GHGScope` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `SustainabilityModeOfTransport` |  | |  |  |  |  |
| `FinancialServicesProductGroup` |  | |  |  |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `SoldProductGroup` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  |  |  |  |
| `ConsolidationLedger` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Segment` |  | |  |  |  |  |
| `CnsldtnTaskLogItemLatestRecord` |  | |  |  |  |  |
| `CnsldtnTskLgNode` |  | |  |  |  |  |
| `CnsldtnTskLgParNode` |  | |  |  |  |  |
| `ConsolidationAcquisitionPeriod` |  | |  |  |  |  |
| `ConsolidationAcquisitionYear` |  | |  |  |  |  |
| `ConsolidationDimension` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `CustomerSupplierCorporateGroup` |  | |  |  |  |  |
| `CustomerSupplierIndustry` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `PartnerBusinessArea` |  | |  |  |  |  |
| `PartnerCompany` |  | |  |  |  |  |
| `PartnerFunctionalArea` |  | |  |  |  |  |
| `PartnerProfitCenter` |  | |  |  |  |  |
| `PartnerSegment` |  | |  |  |  |  |
| `PartnerWBSElementExternalID` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `GHGDataQualityCharacteristic` |  | |  |  |  |  |
| `GHGEnergyClassification` |  | |  |  |  |  |
| `GHGEnergyMix` |  | |  |  |  |  |
| `GHGEnergySourcingType` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ProjectExternalID` |  | |  |  |  |  |
| `CnsldtnAdhocItem` |  | |  |  |  |  |
| `CnsldtnAdhocSet` |  | |  |  |  |  |
| `CnsldtnAdhocSetItem` |  | |  |  |  |  |
| `_ConsolidationTaskLog` | | ✓ | | | | |
| `_ConsolidationTaskLogMessage` | | ✓ | | | | |
| `_CnsldtnVersion` | | ✓ | | | | |
| `_CnsldtnJrnlEntryAmtLoclCrcy` | | ✓ | | | | |
| `_CnsldtnJrnlEntryAmtGrpCrcy` | | ✓ | | | | |
| `_CnsldtnJrnlEntryAmtTransCrcy` | | ✓ | | | | |
| `_CnsldtnJrnlEntryQtyBaseUnit` | | ✓ | | | | |
| `_CnsldtnTriggeringAmtLoclCrcy` | | ✓ | | | | |
| `_CnsldtnTriggeringAmtGrpCrcy` | | ✓ | | | | |
| `_CnsldtnTriggeringAmtTransCrcy` | | ✓ | | | | |
| `_CnsldtnTriggeringQtyBaseUnit` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_CnsldtnFSItem` | | ✓ | | | | |
| `_CnsldtnUnitPartner` | | ✓ | | | | |
| `_CnsldtnGroup` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CnsldtnSubitemCategory` | | ✓ | | | | |
| `_CnsldtnSubItem` | | ✓ | | | | |
| `_CnsldtnPostingLevel` | | ✓ | | | | |
| `_CnsldtnApportionment` | | ✓ | | | | |
| `_CnsldtnCrcyCnvrsnDiffType` | | ✓ | | | | |
| `_CnsldtnDocumentType` | | ✓ | | | | |
| `_CnsldtnUnitInvestee` | | ✓ | | | | |
| `_CnsldtnInvmtActy` | | ✓ | | | | |
| `_CnsldtnFinTransType` | | ✓ | | | | |
| `_CnsldtnCustomerGroup` | | ✓ | | | | |
| `_CnsldtnGHGScp2CalcMethod` | | ✓ | | | | |
| `_CnsldtnCashLedgerAccount` | | ✓ | | | | |
| `_CnsldtnCashLedgerChartOfAccts` | | ✓ | | | | |
| `_CnsldtnGHGScp2CntrctlInstr` | | ✓ | | | | |
| `_CnsldtnCountry` | | ✓ | | | | |
| `_CnsldtnGHGCategory` | | ✓ | | | | |
| `_CnsldtnGHGScope` | | ✓ | | | | |
| `_CnsldtnSustModeOfTransport` | | ✓ | | | | |
| `_CnsldtnProduct` | | ✓ | | | | |
| `_CnsldtnProductGroup` | | ✓ | | | | |
| `_CnsldtnBillingDocumentType` | | ✓ | | | | |
| `_CnsldtnBusinessArea` | | ✓ | | | | |
| `_CnsldtnCustomer` | | ✓ | | | | |
| `_CnsldtnMaterial` | | ✓ | | | | |
| `_CnsldtnPlant` | | ✓ | | | | |
| `_CnsldtnSegment` | | ✓ | | | | |
| `_CnsldtnTaskLogItemType` | | ✓ | | | | |
| `_CnsldtnDimension` | | ✓ | | | | |
| `_CnsldtnControllingArea` | | ✓ | | | | |
| `_CnsldtnCostCenter` | | ✓ | | | | |
| `_CnsldtnDistributionChannel` | | ✓ | | | | |
| `_CnsldtnFinancialDataSource` | | ✓ | | | | |
| `_CnsldtnFinManagementArea` | | ✓ | | | | |
| `_CnsldtnFinServicesBranch` | | ✓ | | | | |
| `_CnsldtnFunctionalArea` | | ✓ | | | | |
| `_CnsldtnFund` | | ✓ | | | | |
| `_CnsldtnGrant` | | ✓ | | | | |
| `_CnsldtnMaterialGroup` | | ✓ | | | | |
| `_CnsldtnOrder` | | ✓ | | | | |
| `_CnsldtnDivision` | | ✓ | | | | |
| `_CnsldtnBusinessAreaPartner` | | ✓ | | | | |
| `_CnsldtnFunctionalAreaPartner` | | ✓ | | | | |
| `_CnsldtnProfitCenterPartner` | | ✓ | | | | |
| `_CnsldtnSegmentPartner` | | ✓ | | | | |
| `_CnsldtnProfitCenter` | | ✓ | | | | |
| `_CnsldtnSalesDistrict` | | ✓ | | | | |
| `_CnsldtnSalesOrganization` | | ✓ | | | | |
| `_CnsldtnSupplier` | | ✓ | | | | |
| `_CnsldtnGHGDtaQltyCharc` | | ✓ | | | | |
| `_CnsldtnGHGEngyClassification` | | ✓ | | | | |
| `_CnsldtnGHGEnergyMix` | | ✓ | | | | |
| `_CnsldtnGHGEnergySourcingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConsolidationTaskLog` | `I_ConsolidationTaskLog` | [1..1] |
| `_ConsolidationTaskLogMessage` | `I_ConsolidationTaskLogMessage` | [0..*] |
| `_CnsldtnVersion` | `I_CnsldtnVersion` | [0..1] |
| `_CnsldtnJrnlEntryAmtLoclCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnJrnlEntryAmtGrpCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnJrnlEntryAmtTransCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnJrnlEntryQtyBaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CnsldtnTriggeringAmtLoclCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnTriggeringAmtGrpCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnTriggeringAmtTransCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnTriggeringQtyBaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CnsldtnUnit` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |
| `_CnsldtnFSItem` | `I_CnsldtnFSItem_2` | [0..1] |
| `_CnsldtnUnitPartner` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnGroup` | `I_CnsldtnGroup_3` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CnsldtnSubitemCategory` | `I_CnsldtnSubitemCategory_2` | [0..1] |
| `_CnsldtnSubItem` | `I_CnsldtnSubitem_2` | [0..1] |
| `_CnsldtnPostingLevel` | `I_CnsldtnPostingLevel` | [0..1] |
| `_CnsldtnApportionment` | `I_CnsldtnApportionment` | [0..1] |
| `_CnsldtnCrcyCnvrsnDiffType` | `I_CnsldtnCrcyCnvrsnDiffType` | [0..1] |
| `_CnsldtnDocumentType` | `I_CnsldtnDocumentType_2` | [0..1] |
| `_CnsldtnUnitInvestee` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnInvmtActy` | `I_CnsldtnInvmtActy` | [0..1] |
| `_CnsldtnFinTransType` | `I_CnsldtnFinTransType` | [0..1] |
| `_CnsldtnCustomerGroup` | `I_CnsldtnCustomerGroup` | [0..1] |
| `_CnsldtnGHGScp2CalcMethod` | `I_CnsldtnGHGScp2CalcMethod` | [0..1] |
| `_CnsldtnCashLedgerAccount` | `I_CnsldtnGLAccount_2` | [0..1] |
| `_CnsldtnCashLedgerChartOfAccts` | `I_CnsldtnGLChartOfAccounts` | [0..1] |
| `_CnsldtnGHGScp2CntrctlInstr` | `I_CnsldtnGHGScp2CntrctlInstr` | [0..1] |
| `_CnsldtnCountry` | `I_CnsldtnCountry` | [0..1] |
| `_CnsldtnGHGCategory` | `I_CnsldtnGHGCategory` | [0..1] |
| `_CnsldtnGHGScope` | `I_CnsldtnGHGScope` | [0..1] |
| `_CnsldtnSustModeOfTransport` | `I_CnsldtnSustModeOfTransport` | [0..1] |
| `_CnsldtnProduct` | `I_CnsldtnProduct` | [0..1] |
| `_CnsldtnProductGroup` | `I_CnsldtnProductGroup` | [0..1] |
| `_CnsldtnBillingDocumentType` | `I_CnsldtnBillingDocumentType` | [0..1] |
| `_CnsldtnBusinessArea` | `I_CnsldtnBusinessArea` | [0..1] |
| `_CnsldtnCustomer` | `I_CnsldtnCustomer` | [0..1] |
| `_CnsldtnMaterial` | `I_CnsldtnMaterial` | [0..1] |
| `_CnsldtnPlant` | `I_CnsldtnPlant` | [0..1] |
| `_CnsldtnSegment` | `I_CnsldtnSegment` | [0..1] |
| `_CnsldtnTaskLogItemType` | `I_CnsldtnTaskLogItemType` | [0..1] |
| `_CnsldtnDimension` | `I_CnsldtnDimension` | [0..1] |
| `_CnsldtnControllingArea` | `I_CnsldtnControllingArea` | [0..1] |
| `_CnsldtnCostCenter` | `I_CnsldtnCostCenter` | [0..1] |
| `_CnsldtnDistributionChannel` | `I_CnsldtnDistributionChannel` | [0..1] |
| `_CnsldtnFinancialDataSource` | `I_CnsldtnFinancialDataSource` | [0..1] |
| `_CnsldtnFinManagementArea` | `I_CnsldtnFinManagementArea` | [0..1] |
| `_CnsldtnFinServicesBranch` | `I_CnsldtnFinServicesBranch` | [0..1] |
| `_CnsldtnFunctionalArea` | `I_CnsldtnFunctionalArea` | [0..1] |
| `_CnsldtnFund` | `I_CnsldtnFund` | [0..1] |
| `_CnsldtnGrant` | `I_CnsldtnGrant` | [0..1] |
| `_CnsldtnMaterialGroup` | `I_CnsldtnMaterialGroup` | [0..1] |
| `_CnsldtnOrder` | `I_CnsldtnOrder` | [0..1] |
| `_CnsldtnDivision` | `I_CnsldtnDivision` | [0..1] |
| `_CnsldtnBusinessAreaPartner` | `I_CnsldtnBusinessArea` | [0..1] |
| `_CnsldtnFunctionalAreaPartner` | `I_CnsldtnFunctionalArea` | [0..1] |
| `_CnsldtnProfitCenterPartner` | `I_CnsldtnProfitCenter` | [0..1] |
| `_CnsldtnSegmentPartner` | `I_CnsldtnSegment` | [0..1] |
| `_CnsldtnProfitCenter` | `I_CnsldtnProfitCenter` | [0..1] |
| `_CnsldtnSalesDistrict` | `I_CnsldtnSalesDistrict` | [0..1] |
| `_CnsldtnSalesOrganization` | `I_CnsldtnSalesOrganization` | [0..1] |
| `_CnsldtnSupplier` | `I_CnsldtnSupplier` | [0..1] |
| `_CnsldtnGHGDtaQltyCharc` | `I_CnsldtnGHGDtaQltyCharc` | [0..1] |
| `_CnsldtnGHGEngyClassification` | `I_CnsldtnGHGEngyClassification` | [0..1] |
| `_CnsldtnGHGEnergyMix` | `I_CnsldtnGHGEnergyMix` | [0..1] |
| `_CnsldtnGHGEnergySourcingType` | `I_CnsldtnGHGEnergySourcingType` | [0..1] |
| `_Extension` | `E_CnsldtnTaskLogItemDataInput` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #NOT_REQUIRED }

@EndUserText.label: 'Consolidation Task Log Item Data Entry'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'CnsldtnTaskLogItemDataEntry',
                supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass:      #MIXED,
                             serviceQuality: #C,
                             sizeCategory:   #XL } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE }

define root view entity I_CnsldtnTaskLogItemDataEntry
  as select from I_CnsldtnTaskLogItemDataInput as item

  association [1..1] to I_ConsolidationTaskLog       as _ConsolidationTaskLog          on $projection.CnsldtnTaskLogUUID = _ConsolidationTaskLog.CnsldtnTaskLogUUID // no need to extra inner join to header, association (left outer join) speed is the same
  association [0..*] to I_ConsolidationTaskLogMessage as _ConsolidationTaskLogMessage  on $projection.CnsldtnTaskLogUUID = _ConsolidationTaskLogMessage.CnsldtnTaskLogUUID and $projection.CnsldtnTaskLogItemUUID = _ConsolidationTaskLogMessage.CnsldtnTaskLogItemUUID

  association [0..1] to I_CnsldtnVersion             as _CnsldtnVersion                on $projection.ConsolidationVersion = _CnsldtnVersion.ConsolidationVersion
  association [0..1] to I_Currency                   as _CnsldtnJrnlEntryAmtLoclCrcy   on $projection.CnsldtnJrnlEntryAmtLoclCrcy = _CnsldtnJrnlEntryAmtLoclCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnJrnlEntryAmtGrpCrcy    on $projection.CnsldtnJrnlEntryAmtGrpCrcy = _CnsldtnJrnlEntryAmtGrpCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnJrnlEntryAmtTransCrcy  on $projection.CnsldtnJrnlEntryAmtTransCrcy = _CnsldtnJrnlEntryAmtTransCrcy.Currency
  association [0..1] to I_UnitOfMeasure              as _CnsldtnJrnlEntryQtyBaseUnit   on $projection.CnsldtnJrnlEntryQtyBaseUnit = _CnsldtnJrnlEntryQtyBaseUnit.UnitOfMeasure
  association [0..1] to I_Currency                   as _CnsldtnTriggeringAmtLoclCrcy  on $projection.CnsldtnTriggeringAmtLoclCrcy = _CnsldtnTriggeringAmtLoclCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnTriggeringAmtGrpCrcy   on $projection.CnsldtnTriggeringAmtGrpCrcy = _CnsldtnTriggeringAmtGrpCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnTriggeringAmtTransCrcy on $projection.CnsldtnTriggeringAmtTransCrcy = _CnsldtnTriggeringAmtTransCrcy.Currency
  association [0..1] to I_UnitOfMeasure              as _CnsldtnTriggeringQtyBaseUnit  on $projection.CnsldtnTriggeringQtyBaseUnit = _CnsldtnTriggeringQtyBaseUnit.UnitOfMeasure
  association [0..1] to I_CnsldtnUnit_4              as _CnsldtnUnit                   on $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit
  association [0..1] to I_CnsldtnChartOfAccounts     as _CnsldtnChartOfAccounts        on $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts
  association [0..1] to I_CnsldtnFSItem_2            as _CnsldtnFSItem                 on $projection.ConsolidationChartOfAccounts = _CnsldtnFSItem.ConsolidationChartOfAccounts and $projection.CnsldtnFinancialStatementItem = _CnsldtnFSItem.CnsldtnFinancialStatementItem
  association [0..1] to I_CnsldtnUnit_4              as _CnsldtnUnitPartner            on $projection.PartnerConsolidationUnit = _CnsldtnUnitPartner.ConsolidationUnit
  association [0..1] to I_CnsldtnGroup_3             as _CnsldtnGroup                  on $projection.ConsolidationGroup = _CnsldtnGroup.ConsolidationGroup
  association [0..1] to I_CompanyCode                as _CompanyCode                   on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CnsldtnSubitemCategory_2   as _CnsldtnSubitemCategory        on $projection.SubItemCategory = _CnsldtnSubitemCategory.CnsldtnSubitemCategory
  association [0..1] to I_CnsldtnSubitem_2           as _CnsldtnSubItem                on $projection.SubItemCategory = _CnsldtnSubItem.CnsldtnSubitemCategory and $projection.SubItem = _CnsldtnSubItem.CnsldtnSubitem
  association [0..1] to I_CnsldtnPostingLevel        as _CnsldtnPostingLevel           on $projection.PostingLevel = _CnsldtnPostingLevel.PostingLevel
  association [0..1] to I_CnsldtnApportionment       as _CnsldtnApportionment          on $projection.ConsolidationApportionment = _CnsldtnApportionment.ConsolidationApportionment
  association [0..1] to I_CnsldtnCrcyCnvrsnDiffType  as _CnsldtnCrcyCnvrsnDiffType     on $projection.CurrencyConversionsDiffType = _CnsldtnCrcyCnvrsnDiffType.CurrencyConversionsDiffType
  association [0..1] to I_CnsldtnDocumentType_2      as _CnsldtnDocumentType           on $projection.ConsolidationDocumentType = _CnsldtnDocumentType.ConsolidationDocumentType
  association [0..1] to I_CnsldtnUnit_4              as _CnsldtnUnitInvestee           on $projection.InvesteeConsolidationUnit = _CnsldtnUnitInvestee.ConsolidationUnit
  association [0..1] to I_CnsldtnInvmtActy           as _CnsldtnInvmtActy              on $projection.InvestmentActivityType = _CnsldtnInvmtActy.InvestmentActivityType
  association [0..1] to I_CnsldtnFinTransType        as _CnsldtnFinTransType           on $projection.FinancialTransactionType = _CnsldtnFinTransType.FinancialTransactionType
  association [0..1] to I_CnsldtnCustomerGroup       as _CnsldtnCustomerGroup          on $projection.CustomerGroup = _CnsldtnCustomerGroup.CustomerGroup
  association [0..1] to I_CnsldtnGHGScp2CalcMethod   as _CnsldtnGHGScp2CalcMethod      on $projection.GHGScope2CalculationMethod = _CnsldtnGHGScp2CalcMethod.GHGScope2CalculationMethod
  association [0..1] to I_CnsldtnGLAccount_2         as _CnsldtnCashLedgerAccount      on $projection.CnsldtnCashLedgerChartOfAccts = _CnsldtnCashLedgerAccount.ChartOfAccounts and $projection.CashLedgerAccount = _CnsldtnCashLedgerAccount.GLAccount
  association [0..1] to I_CnsldtnGLChartOfAccounts   as _CnsldtnCashLedgerChartOfAccts on $projection.CnsldtnCashLedgerChartOfAccts = _CnsldtnCashLedgerChartOfAccts.ChartOfAccounts
  association [0..1] to I_CnsldtnGHGScp2CntrctlInstr as _CnsldtnGHGScp2CntrctlInstr    on $projection.GHGScope2ContractualInstrument = _CnsldtnGHGScp2CntrctlInstr.GHGScope2ContractualInstrument
  association [0..1] to I_CnsldtnCountry             as _CnsldtnCountry                on $projection.CustomerSupplierCountry = _CnsldtnCountry.Country
  association [0..1] to I_CnsldtnGHGCategory         as _CnsldtnGHGCategory            on $projection.GHGCategory = _CnsldtnGHGCategory.GHGCategory
  association [0..1] to I_CnsldtnGHGScope            as _CnsldtnGHGScope               on $projection.GHGScope = _CnsldtnGHGScope.GHGScope
  association [0..1] to I_CnsldtnSustModeOfTransport as _CnsldtnSustModeOfTransport    on $projection.SustainabilityModeOfTransport = _CnsldtnSustModeOfTransport.SustainabilityModeOfTransport
  association [0..1] to I_CnsldtnProduct             as _CnsldtnProduct                on $projection.SoldProduct = _CnsldtnProduct.Product
  association [0..1] to I_CnsldtnProductGroup        as _CnsldtnProductGroup           on $projection.SoldProductGroup = _CnsldtnProductGroup.ProductGroup
  association [0..1] to I_CnsldtnBillingDocumentType as _CnsldtnBillingDocumentType    on $projection.BillingDocumentType = _CnsldtnBillingDocumentType.BillingDocumentType
  association [0..1] to I_CnsldtnBusinessArea        as _CnsldtnBusinessArea           on $projection.BusinessArea = _CnsldtnBusinessArea.BusinessArea
  association [0..1] to I_CnsldtnCustomer            as _CnsldtnCustomer               on $projection.Customer = _CnsldtnCustomer.Customer
  association [0..1] to I_CnsldtnMaterial            as _CnsldtnMaterial               on $projection.Material = _CnsldtnMaterial.Material
  association [0..1] to I_CnsldtnPlant               as _CnsldtnPlant                  on $projection.Plant = _CnsldtnPlant.Plant
  association [0..1] to I_CnsldtnSegment             as _CnsldtnSegment                on $projection.Segment = _CnsldtnSegment.Segment
  association [0..1] to I_CnsldtnTaskLogItemType     as _CnsldtnTaskLogItemType        on $projection.CnsldtnTaskLogItemType = _CnsldtnTaskLogItemType.CnsldtnTaskLogItemType
  association [0..1] to I_CnsldtnDimension           as _CnsldtnDimension              on $projection.ConsolidationDimension = _CnsldtnDimension.ConsolidationDimension
  association [0..1] to I_CnsldtnControllingArea     as _CnsldtnControllingArea        on $projection.ControllingArea = _CnsldtnControllingArea.ControllingArea
  association [0..1] to I_CnsldtnCostCenter          as _CnsldtnCostCenter             on $projection.CostCenter = _CnsldtnCostCenter.CostCenter and $projection.ControllingArea = _CnsldtnCostCenter.ControllingArea
  association [0..1] to I_CnsldtnDistributionChannel as _CnsldtnDistributionChannel    on $projection.DistributionChannel = _CnsldtnDistributionChannel.DistributionChannel
  association [0..1] to I_CnsldtnFinancialDataSource as _CnsldtnFinancialDataSource    on $projection.FinancialDataSource = _CnsldtnFinancialDataSource.FinancialDataSource
  association [0..1] to I_CnsldtnFinManagementArea   as _CnsldtnFinManagementArea      on $projection.FinancialManagementArea = _CnsldtnFinManagementArea.FinancialManagementArea
  association [0..1] to I_CnsldtnFinServicesBranch   as _CnsldtnFinServicesBranch      on $projection.FinancialServicesBranch = _CnsldtnFinServicesBranch.FinancialServicesBranch
  association [0..1] to I_CnsldtnFunctionalArea      as _CnsldtnFunctionalArea         on $projection.FunctionalArea = _CnsldtnFunctionalArea.FunctionalArea
  association [0..1] to I_CnsldtnFund                as _CnsldtnFund                   on $projection.Fund = _CnsldtnFund.Fund and $projection.FinancialManagementArea = _CnsldtnFund.FinancialManagementArea
  association [0..1] to I_CnsldtnGrant               as _CnsldtnGrant                  on $projection.GrantID = _CnsldtnGrant.GrantID
  association [0..1] to I_CnsldtnMaterialGroup       as _CnsldtnMaterialGroup          on $projection.MaterialGroup = _CnsldtnMaterialGroup.MaterialGroup
  association [0..1] to I_CnsldtnOrder               as _CnsldtnOrder                  on $projection.OrderID = _CnsldtnOrder.OrderID
  association [0..1] to I_CnsldtnDivision            as _CnsldtnDivision               on $projection.Division = _CnsldtnDivision.Division
  association [0..1] to I_CnsldtnBusinessArea        as _CnsldtnBusinessAreaPartner    on $projection.PartnerBusinessArea = _CnsldtnBusinessAreaPartner.BusinessArea
  association [0..1] to I_CnsldtnFunctionalArea      as _CnsldtnFunctionalAreaPartner  on $projection.PartnerFunctionalArea = _CnsldtnFunctionalAreaPartner.FunctionalArea
  association [0..1] to I_CnsldtnProfitCenter        as _CnsldtnProfitCenterPartner    on $projection.PartnerProfitCenter = _CnsldtnProfitCenterPartner.ProfitCenter and $projection.ControllingArea = _CnsldtnProfitCenterPartner.ControllingArea
  association [0..1] to I_CnsldtnSegment             as _CnsldtnSegmentPartner         on $projection.PartnerSegment = _CnsldtnSegmentPartner.Segment
  association [0..1] to I_CnsldtnProfitCenter        as _CnsldtnProfitCenter           on $projection.ProfitCenter = _CnsldtnProfitCenter.ProfitCenter and $projection.ControllingArea = _CnsldtnProfitCenter.ControllingArea
  association [0..1] to I_CnsldtnSalesDistrict       as _CnsldtnSalesDistrict          on $projection.SalesDistrict = _CnsldtnSalesDistrict.SalesDistrict
  association [0..1] to I_CnsldtnSalesOrganization   as _CnsldtnSalesOrganization      on $projection.SalesOrganization = _CnsldtnSalesOrganization.SalesOrganization
  association [0..1] to I_CnsldtnSupplier            as _CnsldtnSupplier               on $projection.Supplier = _CnsldtnSupplier.Supplier
  association [0..1] to I_CnsldtnGHGDtaQltyCharc       as _CnsldtnGHGDtaQltyCharc       on $projection.GHGDataQualityCharacteristic = _CnsldtnGHGDtaQltyCharc.GHGDataQualityCharacteristic
  association [0..1] to I_CnsldtnGHGEngyClassification as _CnsldtnGHGEngyClassification on $projection.GHGEnergyClassification = _CnsldtnGHGEngyClassification.GHGEnergyClassification
  association [0..1] to I_CnsldtnGHGEnergyMix          as _CnsldtnGHGEnergyMix          on $projection.GHGEnergyMix = _CnsldtnGHGEnergyMix.GHGEnergyMix
  association [0..1] to I_CnsldtnGHGEnergySourcingType as _CnsldtnGHGEnergySourcingType on $projection.GHGEnergySourcingType = _CnsldtnGHGEnergySourcingType.GHGEnergySourcingType

  //do not expose this association in the projection list of the view
  association [1..1] to E_CnsldtnTaskLogItemDataInput as _Extension                    on $projection.CnsldtnTaskLogUUID = _Extension.CnsldtnTaskLogUUID and $projection.CnsldtnTaskLogItemUUID = _Extension.CnsldtnTaskLogItemUUID

/*
  association [0..*] to I_CnsldtnTaskLogItemTypeT      as _CnsldtnTaskLogItemTypeT     on $projection.CnsldtnTaskLogItemType = _CnsldtnTaskLogItemTypeT.CnsldtnTaskLogItemType
  association [0..*] to I_CnsldtnUnitText_4            as _CnsldtnUnitText             on $projection.ConsolidationUnit = _CnsldtnUnitText.ConsolidationUnit
  association [0..*] to I_CnsldtnFinancialDataSourceT  as _CnsldtnFinancialDataSourceT on $projection.FinancialDataSource = _CnsldtnFinancialDataSourceT.FinancialDataSource
  association [0..*] to I_CnsldtnFinManagementAreaT    as _CnsldtnFinManagementAreaT   on $projection.FinancialManagementArea = _CnsldtnFinManagementAreaT.FinancialManagementArea
  association [0..*] to I_CnsldtnFinServicesBranchT    as _CnsldtnFinServicesBranchT   on $projection.FinancialServicesBranch = _CnsldtnFinServicesBranchT.FinancialServicesBranch
  association [0..*] to I_CnsldtnFSItemText_2          as _CnsldtnFSItemText           on $projection.ConsolidationChartOfAccounts = _CnsldtnFSItemText.ConsolidationChartOfAccounts and $projection.CnsldtnFinancialStatementItem = _CnsldtnFSItemText.CnsldtnFinancialStatementItem
  association [0..*] to I_CnsldtnFundT                 as _CnsldtnFundT                on $projection.Fund = _CnsldtnFundT.Fund and $projection.FinancialManagementArea = _CnsldtnFundT.FinancialManagementArea
  association [0..*] to I_CnsldtnGHGCategoryT          as _CnsldtnGHGCategoryT         on $projection.GHGCategory = _CnsldtnGHGCategoryT.GHGCategory
  association [0..*] to I_CnsldtnGHGScp2CalcMethodT    as _CnsldtnGHGScp2CalcMethodT   on $projection.GHGScope2CalculationMethod = _CnsldtnGHGScp2CalcMethodT.GHGScope2CalculationMethod
  association [0..*] to I_CnsldtnGHGScopeT             as _CnsldtnGHGScopeT            on $projection.GHGScope = _CnsldtnGHGScopeT.GHGScope
  association [0..*] to I_CnsldtnGHGScp2CntrctlInstrT  as _CnsldtnGHGScp2CntrctlInstrT on $projection.GHGScope2ContractualInstrument = _CnsldtnGHGScp2CntrctlInstrT.GHGScope2ContractualInstrument
  association [0..*] to I_CnsldtnGrantT                as _CnsldtnGrantT               on $projection.GrantID = _CnsldtnGrantT.GrantID
  association [0..*] to I_CnsldtnUnitText_4            as _CnsldtnUnitTextPartner      on $projection.ConsolidationUnit = _CnsldtnUnitTextPartner.ConsolidationUnit
  association [0..*] to I_CnsldtnSubitemCategoryText_2 as _CnsldtnSubitemCategoryText  on $projection.SubItemCategory = _CnsldtnSubitemCategoryText.CnsldtnSubitemCategory
  association [0..*] to I_CnsldtnSubitemText_2         as _CnsldtnSubitemText          on $projection.SubItemCategory = _CnsldtnSubitemText.CnsldtnSubitemCategory and $projection.SubItem = _CnsldtnSubitemText.CnsldtnSubitem
  association [0..*] to I_CnsldtnSustModeOfTransportT  as _CnsldtnSustModeOfTransportT on $projection.SustainabilityModeOfTransport = _CnsldtnSustModeOfTransportT.SustainabilityModeOfTransport
*/
{
  key item.CnsldtnTaskLogUUID,
  key item.CnsldtnTaskLogItemUUID,

      @ObjectModel.foreignKey.association: '_CnsldtnTaskLogItemType'
      item.CnsldtnTaskLogItemType,
      
      item.AssignmentReference,
      item.PostingFiscalYear,
      item.ConsolidationDocumentNumber,

      @ObjectModel: { foreignKey.association: '_CnsldtnVersion',
                      sapObjectNodeTypeReference: 'ConsolidationVersion' }
      item.ConsolidationVersion,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryAmtLoclCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      item.CnsldtnJrnlEntryAmtLoclCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtLoclCrcy'
      item.CnsldtnJrnlEntryAmtInLoclCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryAmtGrpCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      item.CnsldtnJrnlEntryAmtGrpCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtGrpCrcy'
      item.CnsldtnJrnlEntryAmtInGrpCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryAmtTransCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      item.CnsldtnJrnlEntryAmtTransCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtTransCrcy'
      item.CnsldtnJrnlEntryAmtInTransCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryQtyBaseUnit'
//      @ObjectModel.sapObjectNodeTypeReference: 'UnitOfMeasure'
      item.CnsldtnJrnlEntryQtyBaseUnit,

      @Semantics.quantity.unitOfMeasure: 'CnsldtnJrnlEntryQtyBaseUnit'
      item.CnsldtnJrnlEntryQtyInBsUnt,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringAmtLoclCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      item.CnsldtnTriggeringAmtLoclCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnTriggeringAmtLoclCrcy'
      item.CnsldtnTriggeringAmtInLoclCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringAmtGrpCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      item.CnsldtnTriggeringAmtGrpCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnTriggeringAmtGrpCrcy'
      item.CnsldtnTriggeringAmtInGrpCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringAmtTransCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      item.CnsldtnTriggeringAmtTransCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnTriggeringAmtTransCrcy'
      item.CnsldtnTriggeringAmtInTC,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringQtyBaseUnit'
//      @ObjectModel.sapObjectNodeTypeReference: 'UnitOfMeasure'
      item.CnsldtnTriggeringQtyBaseUnit,

      @Semantics.quantity.unitOfMeasure: 'CnsldtnTriggeringQtyBaseUnit'
      item.CnsldtnTriggeringQtyInBsUnt,

      @ObjectModel: { foreignKey.association: '_CnsldtnUnit',
                      sapObjectNodeTypeReference: 'ConsolidationUnit' }
      item.ConsolidationUnit,

      @ObjectModel: { foreignKey.association: '_CnsldtnChartOfAccounts',
                      sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts' }
      item.ConsolidationChartOfAccounts,

      @ObjectModel: { foreignKey.association: '_CnsldtnFSItem',
                      sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem' }
      item.CnsldtnFinancialStatementItem,

      @ObjectModel: { foreignKey.association: '_CnsldtnUnitPartner',
                      sapObjectNodeTypeReference: 'ConsolidationUnit' }
      item.PartnerConsolidationUnit,

      @ObjectModel: { foreignKey.association: '_CnsldtnGroup',
                      sapObjectNodeTypeReference: 'ConsolidationGroup' }
      item.ConsolidationGroup,

      @ObjectModel: { foreignKey.association: '_CompanyCode',
                      sapObjectNodeTypeReference: 'CompanyCode' }
      item.CompanyCode,

      @ObjectModel: { foreignKey.association: '_CnsldtnSubitemCategory',
                      sapObjectNodeTypeReference: 'ConsolidationSubitemCategory' }
      item.SubItemCategory,

      @ObjectModel.foreignKey.association: '_CnsldtnSubItem'
//      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationSubitem'
      item.SubItem,

      @ObjectModel: { foreignKey.association: '_CnsldtnPostingLevel',
                      sapObjectNodeTypeReference: 'ConsolidationPostingLevel' }
      item.PostingLevel,

      @ObjectModel: { foreignKey.association: '_CnsldtnApportionment',
                      sapObjectNodeTypeReference: 'ConsolidationApportionment' }
      item.ConsolidationApportionment,

      @ObjectModel: { foreignKey.association: '_CnsldtnCrcyCnvrsnDiffType',
                      sapObjectNodeTypeReference: 'CnsldtnCrcyConversionDiffType' }
      item.CurrencyConversionsDiffType,

      @ObjectModel: { foreignKey.association: '_CnsldtnDocumentType',
                      sapObjectNodeTypeReference: 'ConsolidationDocumentType' }
      item.ConsolidationDocumentType,

      @ObjectModel.foreignKey.association: '_CnsldtnUnitInvestee'
//      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationUnit'
      item.InvesteeConsolidationUnit,

      @ObjectModel: { foreignKey.association: '_CnsldtnInvmtActy',
                      sapObjectNodeTypeReference: 'CnsldtnInvestmentActivityType' }
      item.InvestmentActivityType,

      item.InvestmentActivity,
      item.PostingDate,

//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnCostCenter'
      item.PartnerCostCenter,

      @ObjectModel: { foreignKey.association: '_CnsldtnFinTransType',
                      sapObjectNodeTypeReference: 'CnsldtnFinTransactionType' }
      item.FinancialTransactionType,

      @ObjectModel: { foreignKey.association: '_CnsldtnCustomerGroup',
                      sapObjectNodeTypeReference: 'CnsldtnCustomerGroup' }
      item.CustomerGroup,

      item.CnsldtnTskLgItmRowNmbr,
      item.FiscalPeriod,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnFinServicesBranch',
                      sapObjectNodeTypeReference: 'CnsldtnFinancialServicesBranch' }
      item.FinancialServicesBranch,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScp2CalcMethod',
                      sapObjectNodeTypeReference: 'CnsldtnGHGScp2CalcMethod' }
      item.GHGScope2CalculationMethod,

      @ObjectModel.foreignKey.association: '_CnsldtnCashLedgerAccount'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnGLAccount'
      item.CashLedgerAccount,

      @ObjectModel.foreignKey.association: '_CnsldtnCashLedgerChartOfAccts'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnGLChartOfAccounts'
      item.CnsldtnCashLedgerChartOfAccts,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScp2CntrctlInstr',
                      sapObjectNodeTypeReference: 'CnsldtnGHGScp2CntrctlInstr' }
      item.GHGScope2ContractualInstrument,

      @ObjectModel.foreignKey.association: '_CnsldtnCountry'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnCountry'
      item.CustomerSupplierCountry,

      @ObjectModel: { foreignKey.association: '_CnsldtnFinancialDataSource',
                      sapObjectNodeTypeReference: 'CnsldtnFinancialDataSource' }
      item.FinancialDataSource,
      
      item.CnsldtnLogHeaderDateTime,
      
      @ObjectModel.foreignKey.association: '_CnsldtnFund'
      item.Fund,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGCategory',
                      sapObjectNodeTypeReference: 'CnsldtnGreenhouseGasCategory' }
      item.GHGCategory,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScope',
                      sapObjectNodeTypeReference: 'CnsldtnGreenhouseGasScope' }
      item.GHGScope,

      @ObjectModel: { foreignKey.association: '_CnsldtnGrant',
                      sapObjectNodeTypeReference: 'CnsldtnGrant' }
      item.GrantID,

      @ObjectModel: { foreignKey.association: '_CnsldtnSustModeOfTransport',
                      sapObjectNodeTypeReference: 'CnsldtnSustModeOfTransport' }
      item.SustainabilityModeOfTransport,
      
      item.FinancialServicesProductGroup,

      @ObjectModel.foreignKey.association: '_CnsldtnProduct'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnProduct'
      item.SoldProduct,

      @ObjectModel.foreignKey.association: '_CnsldtnProductGroup'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnProductGroup'
      item.SoldProductGroup,

      item.WBSElementExternalID,

      item.ConsolidationLedger,

      @ObjectModel: { foreignKey.association: '_CnsldtnBillingDocumentType',
                      sapObjectNodeTypeReference: 'CnsldtnBillingDocumentType' }
      item.BillingDocumentType,
      
      item.BillToParty,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnBusinessArea',
                      sapObjectNodeTypeReference: 'CnsldtnBusinessArea' }
      item.BusinessArea,
      
      item.ChartOfAccounts,
      
      @ObjectModel.foreignKey.association: '_CnsldtnCustomer'
      item.Customer,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnMaterial',
                      sapObjectNodeTypeReference: 'CnsldtnMaterial' }
      item.Material,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnPlant',
                      sapObjectNodeTypeReference: 'CnsldtnPlant' }
      item.Plant,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnSegment',
                      sapObjectNodeTypeReference: 'CnsldtnSegment' }
      item.Segment,
      
      item.CnsldtnTaskLogItemLatestRecord,
      item.CnsldtnTskLgNode,
      item.CnsldtnTskLgParNode,
      item.ConsolidationAcquisitionPeriod,
      item.ConsolidationAcquisitionYear,
      
      @ObjectModel.foreignKey.association: '_CnsldtnDimension'
      item.ConsolidationDimension,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnControllingArea',
                      sapObjectNodeTypeReference: 'CnsldtnControllingArea' }
      item.ControllingArea,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnCostCenter',
                      sapObjectNodeTypeReference: 'CnsldtnCostCenter' }
      item.CostCenter,
      
      item.CustomerSupplierCorporateGroup,
      item.CustomerSupplierIndustry,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnDistributionChannel',
                      sapObjectNodeTypeReference: 'CnsldtnDistributionChannel' }
      item.DistributionChannel,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnFinManagementArea',
                      sapObjectNodeTypeReference: 'CnsldtnFinancialManagementArea' }
      item.FinancialManagementArea,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnFunctionalArea',
                      sapObjectNodeTypeReference: 'CnsldtnFunctionalArea' }
      item.FunctionalArea,
      
      item.GLAccount,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnMaterialGroup',
                      sapObjectNodeTypeReference: 'CnsldtnMaterialGroup' }
      item.MaterialGroup,
      
      @ObjectModel.foreignKey.association: '_CnsldtnOrder'
      item.OrderID,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnDivision',
                      sapObjectNodeTypeReference: 'CnsldtnDivision' }
      item.Division,
      
      @ObjectModel.foreignKey.association: '_CnsldtnBusinessAreaPartner'
      item.PartnerBusinessArea,
      
      item.PartnerCompany,
      
      @ObjectModel.foreignKey.association: '_CnsldtnFunctionalAreaPartner'
      item.PartnerFunctionalArea,

      @ObjectModel.foreignKey.association: '_CnsldtnProfitCenterPartner'
      item.PartnerProfitCenter,
      
      @ObjectModel.foreignKey.association: '_CnsldtnSegmentPartner'
      item.PartnerSegment,
      
      item.PartnerWBSElementExternalID,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnProfitCenter',
                      sapObjectNodeTypeReference: 'CnsldtnProfitCenter' }
      item.ProfitCenter,
      
      @ObjectModel: { foreignKey.association: '_CnsldtnSalesDistrict',
                      sapObjectNodeTypeReference: 'CnsldtnSalesDistrict' }
      item.SalesDistrict,
      
      @ObjectModel.foreignKey.association: '_CnsldtnSalesOrganization'
      item.SalesOrganization,
      
      item.ShipToParty,
      
      @ObjectModel.foreignKey.association: '_CnsldtnSupplier'
      item.Supplier,
      
      @ObjectModel.foreignKey.association: '_CnsldtnGHGDtaQltyCharc'
      item.GHGDataQualityCharacteristic,

      @ObjectModel.foreignKey.association: '_CnsldtnGHGEngyClassification'
      item.GHGEnergyClassification,

      @ObjectModel.foreignKey.association: '_CnsldtnGHGEnergyMix'
      item.GHGEnergyMix,

      @ObjectModel.foreignKey.association: '_CnsldtnGHGEnergySourcingType'
      item.GHGEnergySourcingType,

      item.WBSElementInternalID,
      item.ProjectExternalID,
      
      item.CnsldtnAdhocItem,
      item.CnsldtnAdhocSet,
      item.CnsldtnAdhocSetItem,
      
      _ConsolidationTaskLog,
      _ConsolidationTaskLogMessage,
      _CnsldtnVersion,
      _CnsldtnJrnlEntryAmtLoclCrcy,
      _CnsldtnJrnlEntryAmtGrpCrcy,
      _CnsldtnJrnlEntryAmtTransCrcy,
      _CnsldtnJrnlEntryQtyBaseUnit,
      _CnsldtnTriggeringAmtLoclCrcy,
      _CnsldtnTriggeringAmtGrpCrcy,
      _CnsldtnTriggeringAmtTransCrcy,
      _CnsldtnTriggeringQtyBaseUnit,
      _CnsldtnUnit,
      _CnsldtnChartOfAccounts,
      _CnsldtnFSItem,
      _CnsldtnUnitPartner,
      _CnsldtnGroup,
      _CompanyCode,
      _CnsldtnSubitemCategory,
      _CnsldtnSubItem,
      _CnsldtnPostingLevel,
      _CnsldtnApportionment,
      _CnsldtnCrcyCnvrsnDiffType,
      _CnsldtnDocumentType,
      _CnsldtnUnitInvestee,
      _CnsldtnInvmtActy,
      _CnsldtnFinTransType,
      _CnsldtnCustomerGroup,
      _CnsldtnGHGScp2CalcMethod,
      _CnsldtnCashLedgerAccount,
      _CnsldtnCashLedgerChartOfAccts,
      _CnsldtnGHGScp2CntrctlInstr,
      _CnsldtnCountry,
      _CnsldtnGHGCategory,
      _CnsldtnGHGScope,
      _CnsldtnSustModeOfTransport,
      _CnsldtnProduct,
      _CnsldtnProductGroup,
      _CnsldtnBillingDocumentType,
      _CnsldtnBusinessArea,
      _CnsldtnCustomer,
      _CnsldtnMaterial,
      _CnsldtnPlant,
      _CnsldtnSegment,
      _CnsldtnTaskLogItemType,
      _CnsldtnDimension,
      _CnsldtnControllingArea,
      _CnsldtnCostCenter,
      _CnsldtnDistributionChannel,
      _CnsldtnFinancialDataSource,
      _CnsldtnFinManagementArea,
      _CnsldtnFinServicesBranch,
      _CnsldtnFunctionalArea,
      _CnsldtnFund,
      _CnsldtnGrant,
      _CnsldtnMaterialGroup,
      _CnsldtnOrder,
      _CnsldtnDivision,
      _CnsldtnBusinessAreaPartner,
      _CnsldtnFunctionalAreaPartner,
      _CnsldtnProfitCenterPartner,
      _CnsldtnSegmentPartner,
      _CnsldtnProfitCenter,
      _CnsldtnSalesDistrict,
      _CnsldtnSalesOrganization,
      _CnsldtnSupplier,
      _CnsldtnGHGDtaQltyCharc,
      _CnsldtnGHGEngyClassification,
      _CnsldtnGHGEnergyMix,
      _CnsldtnGHGEnergySourcingType
/*      
      // texts
      _CnsldtnTaskLogItemTypeT,
      _CnsldtnUnitText,
      _CnsldtnFinancialDataSourceT,
      _CnsldtnFinManagementAreaT,
      _CnsldtnFinServicesBranchT,
      _CnsldtnFSItemText,
      _CnsldtnFundT,
      _CnsldtnGHGCategoryT,
      _CnsldtnGHGScp2CalcMethodT,
      _CnsldtnGHGScopeT,
      _CnsldtnGHGScp2CntrctlInstrT,
      _CnsldtnGrantT,
      _CnsldtnUnitTextPartner,
      _CnsldtnSubitemCategoryText,
      _CnsldtnSubitemText,
      _CnsldtnSustModeOfTransportT
*/      
}

where (        _ConsolidationTaskLog.ConsolidationTaskCategory = '02'
       or      _ConsolidationTaskLog.ConsolidationTaskCategory = '0D')
  and (    not item.CnsldtnTaskLogItemType = '$'
       and not item.CnsldtnTaskLogItemType = '##')
```
