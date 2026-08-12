---
name: I_HOUSEBANKBASIC
description: "Housebankbasic"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
  - bo:Bank
---
# I_HOUSEBANKBASIC

**Housebankbasic**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `HouseBank` | ✓ | |  |  |  |  |
| `BankCountry` |  | |  |  |  |  |
| `BankInternalID` |  | |  |  |  |  |
| `BankName` |  | | `_Bank` | `BankName` |  |  |
| `_Bank` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'House Bank Basic'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName:#LOCAL
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.sqlViewName: 'IFIHOUSEBANKB'
@AbapCatalog.preserveKey:true
@ObjectModel.representativeKey: 'HouseBank'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.supportedCapabilities: [   #SQL_DATA_SOURCE, 
                                        #CDS_MODELING_DATA_SOURCE, 
                                        #CDS_MODELING_ASSOCIATION_TARGET]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.sapObjectNodeType.name: 'HouseBank'
define view I_HouseBankBasic as select from I_Housebank
{
    @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]      
    @ObjectModel.foreignKey.association: '_CompanyCode'
    key CompanyCode,
    @ObjectModel.text.element: 'BankName'
    key HouseBank,
    BankCountry,
    BankInternalID,
    @Semantics.text: true
    _Bank.BankName,
    _Bank,
    _CompanyCode
}
```
