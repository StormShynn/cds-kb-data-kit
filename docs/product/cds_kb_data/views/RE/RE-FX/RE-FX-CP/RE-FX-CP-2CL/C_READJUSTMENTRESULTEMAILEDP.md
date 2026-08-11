---
name: C_READJUSTMENTRESULTEMAILEDP
description: "Real Estate Adjustment Result EDP"
app_component: RE-FX-CP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_READJUSTMENTRESULTEMAILEDP')/$value
semantic_en: "Real Estate Adjustment Result EDP"
semantic_vi: "Real Estate Adjustment Result EDP — CDS view tiêu dùng dựa trên I_REAdjustmentRecord."
keywords:
  - "real"
  - "estate"
  - "adjustment"
  - "result"
  - "edp"
  - "process"
  - "contract"
  - "company"
  - "code"
  - "type"
  - "record"
tags:
  - RE
  - component:RE-FX-CP-2CL
  - consumption-view
  - RE-FX
  - RE-FX-CP
  - RE-FX-CP-2CL
---
# C_READJUSTMENTRESULTEMAILEDP

**Real Estate Adjustment Result EDP**

| Property | Value |
|---|---|
| App Component | `RE-FX-CP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_READJUSTMENTRESULTEMAILEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateProcess` | ✓ | |  |  | `CHAR(16)` | Process ID |
| `RealEstateContract` | ✓ | | `_REContract` | `RealEstateContract` | `CHAR(13)` | Real Estate Contract Number |
| `CompanyCode` | ✓ | | `_REContract` | `CompanyCode` | `CHAR(4)` | Company Code |
| `REContractType` |  | | `_REContract` | `REContractType` | `CHAR(4)` | Contract Type |
| `REAdjustmentRecordUUID` |  | |  |  | `RAW(16)` | Generic Key of Adjustment Record |
| `REAdjustmentNmbrOfLettersSent` |  | |  |  | `INT1(3)` | Number of Adjustment Letters |
| `REAdjustmentLetterSentOnDate` |  | |  |  | `DATS(8)` | Adjustment Letter On |
| `REProcessUUID` |  | |  |  | `RAW(16)` | Generic Key of Process |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `CompanyCodeName` |  | | `_REContract._CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `_REContract` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_READJUSTMENTRESULTEMAILEDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_READJUSTMENTRESULTEMAILEDP')/$value)*

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

@EndUserText.label: 'Real Estate Adjustment Result EDP'
define view entity C_REAdjustmentResultEmailEDP
  as select from I_REAdjustmentRecord
                                               
{
  key RealEstateProcess,
//      @ObjectModel.foreignKey.association: '_REContract'
  key _REContract.RealEstateContract,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key _REContract.CompanyCode,
  
      _REContract.REContractType,
      
      REAdjustmentRecordUUID,
      REAdjustmentNmbrOfLettersSent,
      REAdjustmentLetterSentOnDate,
      
      REProcessUUID,
      InternalRealEstateNumber,
      
      _REContract._CompanyCode.CompanyCodeName,
      
      _REContract,
      _REContract._REContractType,
      _REContract._CompanyCode
}
```
