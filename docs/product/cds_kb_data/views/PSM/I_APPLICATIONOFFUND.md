---
name: I_APPLICATIONOFFUND
description: "Application of Fund"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APPLICATIONOFFUND')/$value
semantic_en: "Application of Fund"
semantic_vi: "Application of Fund — CDS view giao diện dựa trên I_ApplicationOfFundBasic."
keywords:
  - "Application of Fund"
  - "application"
  - "fund"
  - "financial"
  - "management"
  - "area"
  - "funds"
  - "validity"
  - "start"
  - "date"
  - "created"
  - "user"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_APPLICATIONOFFUND

**Application of Fund**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APPLICATIONOFFUND')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `ApplicationOfFunds` | ✓ | |  |  | `CHAR(16)` | Application of Funds |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Application of Funds Validity Start Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Application of Funds Validity End Date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Application of Funds Created by User |
| `CreationDate` |  | |  |  | `DATS(8)` | Application of Funds Created on Date |
| `LastChangeUser` |  | |  |  | `CHAR(12)` | Application of Funds Last Changed by User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Application of Funds Last Changed on Date |
| `US_FedGvmntDepartmentRegular` |  | |  |  | `CHAR(2)` | Department Regular |
| `US_FedGvmntDepartmentTransfer` |  | |  |  | `CHAR(2)` | Department Transfer |
| `US_FedGvmntMainAccount` |  | |  |  | `CHAR(4)` | Main Account |
| `US_FedGvmntSubAccount` |  | |  |  | `CHAR(3)` | Subaccount |
| `US_FedGvmntSplitSequenceNumber` |  | |  |  | `CHAR(3)` | Split Sequence Number |
| `US_IsFedGvmntFACTS2Relevant` |  | |  |  | `CHAR(1)` | FACTS II Relevant |
| `US_FedGvmntPreparer` |  | |  |  | `CHAR(8)` | Preparer ID |
| `US_FedGvmntCertifier` |  | |  |  | `CHAR(8)` | Certifier ID |
| `_US_IsFedGvmntFACTS2Relevant` | | ✓ | | | | |
| `_FinMgmtArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_ApplicationOfFund` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APPLICATIONOFFUND')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APPLICATIONOFFUND')/$value)*

```abap
@EndUserText.label: 'Application of Fund'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'ApplicationOfFunds'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #S
}
@ObjectModel.sapObjectNodeType.name: 'ApplicationOfFund'
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IAPPLOFFUND'
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'ApplicationOfFunds'
define view I_ApplicationOfFund
  as select from I_ApplicationOfFundBasic
  
    association [1..1] to E_ApplicationOfFund as _Extension  //do not expose this association in the projection list of the view 
       on  $projection.FinancialManagementArea  = _Extension.FinancialManagementArea
       and $projection.ApplicationOfFunds       = _Extension.ApplicationOfFunds  
{
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key FinancialManagementArea,
      @ObjectModel.text.association: '_Text'
  key ApplicationOfFunds,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      CreatedByUser,
      CreationDate,
      LastChangeUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      US_FedGvmntDepartmentRegular,
      US_FedGvmntDepartmentTransfer,
      US_FedGvmntMainAccount,
      US_FedGvmntSubAccount,
      US_FedGvmntSplitSequenceNumber,
      @ObjectModel.foreignKey.association: '_US_IsFedGvmntFACTS2Relevant'
      US_IsFedGvmntFACTS2Relevant,
      US_FedGvmntPreparer,
      US_FedGvmntCertifier,

      _US_IsFedGvmntFACTS2Relevant,
      _FinMgmtArea,
      _Text
}
```
