---
name: C_RESALESBASEDEDP
description: "RE Sales-Based Email Determination"
app_component: RE-FX-CP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESALESBASEDEDP')/$value
semantic_en: "RE Sales-Based Email Determination"
semantic_vi: "RE Sales-Based Email Determination — CDS view tiêu dùng dựa trên RE Sales-Based Email Determination."
keywords:
  - "sales"
  - "based"
  - "email"
  - "determination"
  - "real"
  - "estate"
  - "process"
  - "contract"
  - "company"
  - "code"
  - "type"
tags:
  - RE
  - component:RE-FX-CP-2CL
  - consumption-view
  - RE-FX
  - RE-FX-CP
  - RE-FX-CP-2CL
---
# C_RESALESBASEDEDP

**RE Sales-Based Email Determination**

| Property | Value |
|---|---|
| App Component | `RE-FX-CP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESALESBASEDEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateProcess` | ✓ | |  |  | `CHAR(16)` | Process ID |
| `RealEstateContract` | ✓ | | `_REContract` | `RealEstateContract` | `CHAR(13)` | Real Estate Contract Number |
| `CompanyCode` | ✓ | | `_REContract` | `CompanyCode` | `CHAR(4)` | Company Code |
| `REContractType` |  | | `_REContract` | `REContractType` | `CHAR(4)` | Contract Type |
| `REProcessUUID` |  | |  |  | `RAW(16)` | Generic Key of Process |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `CompanyCodeName` |  | | `_REContract._CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `_REContract` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESALESBASEDEDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESALESBASEDEDP')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #CONSUMPTION
@ObjectModel: {
    usageType.dataClass: #MASTER,
    usageType.serviceQuality: #C,
    usageType.sizeCategory: #L,
//    representativeKey: 'RealEstateProcess',
    semanticKey: ['RealEstateProcess', 'RealEstateContract', 'CompanyCode' ],
    supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ],
    modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
    }
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'RE Sales-Based Email Determination'
define view entity C_RESalesBasedEDP
  as select distinct from I_RESalesCalculationResult 
{

  key RealEstateProcess,
  //      @ObjectModel.foreignKey.association: '_REContract'
  key _REContract.RealEstateContract    as RealEstateContract,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key _REContract.CompanyCode,
  
      _REContract.REContractType,
            
      REProcessUUID,
      InternalRealEstateNumber,
      
      _REContract._CompanyCode.CompanyCodeName,
      
      _REContract,
      _REContract._REContractType,
      _REContract._CompanyCode
}
```
