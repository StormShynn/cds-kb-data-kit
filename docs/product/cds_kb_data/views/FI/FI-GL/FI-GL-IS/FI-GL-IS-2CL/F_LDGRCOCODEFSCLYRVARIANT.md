---
name: F_LDGRCOCODEFSCLYRVARIANT
description: "Ldgrcocodefsclyrvariant"
semantic_vi: "View F_LDGRCOCODEFSCLYRVARIANT CDS cung cấp dữ liệu tài chính cho một mã đơn vị công ty và biến niên độ tài chính cụ thể trong một sổ cái, thường được sử dụng cho báo cáo và phân tích tài chính."
keywords:
  - "financial data"
  - "sổ cái"
  - "ledger"
  - "company code"
  - "mã đơn vị công ty"
  - "fiscal year variant"
  - "biến niên độ tài chính"
  - "financial reporting"
  - "phân tích tài chính"
  - "fi-gl"
  - "fi-gl-is"
semantic_en: "The F_LDGRCOCODEFSCLYRVARIANT CDS view provides financial data for a specific company code and fiscal year variant within a ledger, typically used for financial reporting and analysis."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - fact-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# F_LDGRCOCODEFSCLYRVARIANT

**Ldgrcocodefsclyrvariant**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `_Ledger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Fiscal Year Variant of Ledger Company Code'
@Metadata.allowExtensions:false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CompanyCode'
@Analytics.technicalName: 'FFILDGCOCOFYV'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #B,
  sizeCategory: #S
}
@ObjectModel: {
  supportedCapabilities: [#DERIVATION_FUNCTION],
  modelingPattern: #DERIVATION_FUNCTION
  }
@VDM.viewType: #DERIVATION_FUNCTION

@ObjectModel.derivationFunction: {
  applicableFor.element: ['FiscalYearVariant'],
  inputElement: ['Ledger', 'CompanyCode'],
  result: {
    type: #SINGLE,
    multipleRecords: false,
    element: 'FiscalYearVariant'
  }
}


define view entity F_LdgrCoCodeFsclYrVariant
  as select from I_LedgerCompanyCodeCrcyRoles
{

       @ObjectModel.foreignKey.association: '_Ledger'
  key  Ledger,
       @ObjectModel.foreignKey.association: '_CompanyCode'
  key  CompanyCode,

       FiscalYearVariant,

       _Ledger,
       _CompanyCode

}
```
