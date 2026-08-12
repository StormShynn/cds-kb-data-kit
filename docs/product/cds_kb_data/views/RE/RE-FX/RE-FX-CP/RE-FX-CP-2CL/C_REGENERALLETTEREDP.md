---
name: C_REGENERALLETTEREDP
description: "RE General Letter Email Determination"
app_component: RE-FX-CP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REGENERALLETTEREDP')/$value
semantic_en: "RE General Letter Email Determination"
semantic_vi: "RE General Letter Email Determination — CDS view tiêu dùng dựa trên I_REContract."
keywords:
  - "general"
  - "letter"
  - "email"
  - "determination"
  - "correspondence"
  - "application"
  - "company"
  - "code"
  - "real"
  - "estate"
  - "contract"
  - "type"
  - "start"
  - "date"
tags:
  - RE
  - component:RE-FX-CP-2CL
  - consumption-view
  - RE-FX
  - RE-FX-CP
  - RE-FX-CP-2CL
---
# C_REGENERALLETTEREDP

**RE General Letter Email Determination**

| Property | Value |
|---|---|
| App Component | `RE-FX-CP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REGENERALLETTEREDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CorrespondenceApplication` | ✓ | |  | `'A400'` | `CHAR(4)` |  |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` | ✓ | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REContractType` | ✓ | |  |  | `CHAR(4)` | Contract Type |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REContractName` |  | |  |  | `CHAR(80)` | Contract Name |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REGENERALLETTEREDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REGENERALLETTEREDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #CONSUMPTION
@ObjectModel: {
    usageType.dataClass: #MASTER,
    usageType.serviceQuality: #C,
    usageType.sizeCategory: #L,
//    representativeKey: 'InternalRealEstateNumber',
    semanticKey: ['CorrespondenceApplication', 'CompanyCode', 'RealEstateContract', 'REContractType'],
    supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ],
    modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
    }
    
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'RE General Letter Email Determination'
define view entity C_REGeneralLetterEDP as select from I_REContract
{
  
  key 'A400' as CorrespondenceApplication,
  key CompanyCode,
  key RealEstateContract,
  key REContractType,
      ContractStartDate,
      ContractEndDate,
      REContractName,
      
      _CompanyCode.CompanyCodeName
}
```
