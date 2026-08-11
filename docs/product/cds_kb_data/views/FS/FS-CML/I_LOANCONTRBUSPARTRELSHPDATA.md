---
name: I_LOANCONTRBUSPARTRELSHPDATA
description: "Business Partner relationship data for Loan Contract"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBUSPARTRELSHPDATA')/$value
semantic_en: "Business Partner relationship data for Loan Contract"
semantic_vi: "Business Partner relationship data for Loan Contract — CDS view giao diện dựa trên vdgpo."
keywords:
  - "business"
  - "partner"
  - "relationship"
  - "data"
  - "for"
  - "loan"
  - "contract"
  - "object"
  - "code"
  - "internal"
  - "role"
  - "generation"
  - "date"
tags:
  - FS
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
  - bo:purchaseorder
---
# I_LOANCONTRBUSPARTRELSHPDATA

**Business Partner relationship data for Loan Contract**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBUSPARTRELSHPDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanBPObjectCode` | ✓ | |  | `snumobj` | `CHAR(2)` | Key for number range object |
| `LoanBPObjectInternalKey` | ✓ | |  | `sobjekt` | `CHAR(13)` | Internal key for object for business partner table |
| `BusinessPartner` | ✓ | |  | `partnr` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerRole` | ✓ | |  | `roletyp` | `CHAR(6)` | BP Role |
| `LoanBPObjectGenerationDate` | ✓ | |  | `dtrans` | `DATS(8)` | Flow data key: System date |
| `LoanBusPartRelshpStrtDte` |  | |  | `dbebez` | `DATS(8)` | Date of start of relationship |
| `LoanBusPartRelshpEndDte` |  | |  | `denbez` | `DATS(8)` | Date of end of relationship |
| `LoanCorrespncRoleType` |  | |  | `role` | `CHAR(4)` | CML Correspondence Role Type of Recipient |
| `Customer` |  | |  | `kunnr` | `CHAR(10)` | Customer Number |
| `BPBankAccountInternalID` |  | |  | `bvtyp` | `CHAR(4)` | Partner bank type |
| `BPPaymentMethod` |  | |  | `zlsch` | `CHAR(1)` | Payment Method |
| `LoanBPDunLetterType` |  | |  | `sdunndoc` | `CHAR(1)` | Type of Dunning Letter |
| `LoanBPIsPostDunCharge` |  | |  | `sdunnbuc` | `CHAR(1)` | Post Dunning Charges and Interest to This Partner |
| `_LoanContrData` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerRole` | | ✓ | | | | |
| `_LoanCorrespncRoleType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LoanContrData` | `I_LoanContrData` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_BusinessPartnerRole` | `I_BusinessPartnerRole` | [0..1] |
| `_LoanCorrespncRoleType` | `I_LoanCorrespncRoleType` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBUSPARTRELSHPDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBUSPARTRELSHPDATA')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCBPRELD',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'TRANSACTIONAL'
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ]
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    internalName: #LOCAL,
    dataCategory: #CUBE,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm : #SESSION_VARIABLE
@EndUserText.label: 'Business Partner relationship data for Loan Contract'

define view I_LoanContrBusPartRelshpData
  as select from vdgpo
  association [0..1] to I_LoanContrData         as _LoanContrData         on $projection.LoanBPObjectInternalKey = _LoanContrData.LoanObjectInternalKey
  association [0..1] to I_BusinessPartner       as _BusinessPartner       on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BusinessPartnerRole   as _BusinessPartnerRole   on $projection.BusinessPartnerRole = _BusinessPartnerRole.BusinessPartnerRole
  association [0..1] to I_LoanCorrespncRoleType as _LoanCorrespncRoleType on $projection.LoanCorrespncRoleType = _LoanCorrespncRoleType.LoanCorrespncRoleType
  association [0..1] to I_Customer              as _Customer              on $projection.Customer = _Customer.Customer
{
  key vdgpo.snumobj  as LoanBPObjectCode,
  key vdgpo.sobjekt  as LoanBPObjectInternalKey,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key vdgpo.partnr   as BusinessPartner,
      @ObjectModel.foreignKey.association: '_BusinessPartnerRole'
      @Consumption.valueHelpDefinition: [{association: '_BusinessPartnerRole' }]
  key vdgpo.roletyp  as BusinessPartnerRole,
  key vdgpo.dtrans   as LoanBPObjectGenerationDate,

      vdgpo.dbebez   as LoanBusPartRelshpStrtDte,
      vdgpo.denbez   as LoanBusPartRelshpEndDte,
      @ObjectModel.foreignKey.association: '_LoanCorrespncRoleType'
      vdgpo.role     as LoanCorrespncRoleType,
      @ObjectModel.foreignKey.association: '_Customer'
      vdgpo.kunnr    as Customer,
      vdgpo.bvtyp    as BPBankAccountInternalID,
      vdgpo.zlsch    as BPPaymentMethod,
      vdgpo.sdunndoc as LoanBPDunLetterType,
      vdgpo.sdunnbuc as LoanBPIsPostDunCharge,

      _LoanContrData,
      _BusinessPartner,
      _BusinessPartnerRole,
      _LoanCorrespncRoleType,
      _Customer
}
where
  $projection.loanbpobjectcode = 'VD'
```
