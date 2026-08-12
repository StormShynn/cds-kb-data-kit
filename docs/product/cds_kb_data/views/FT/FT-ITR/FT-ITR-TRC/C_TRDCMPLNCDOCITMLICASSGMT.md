---
name: C_TRDCMPLNCDOCITMLICASSGMT
description: "Trdcmplncdocitmlicassgmt"
app_component: FT-ITR-TRC
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FT
  - FT-ITR
  - FT-ITR-TRC
  - consumption-view
  - component:FT-ITR-TRC
  - lob:Other
---
# C_TRDCMPLNCDOCITMLICASSGMT

**Trdcmplncdocitmlicassgmt**

| Property | Value |
|---|---|
| App Component | `FT-ITR-TRC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdCmplncDocItemUUID` | ✓ | |  |  |  |  |
| `TrdCmplncLicenseUUID` | ✓ | |  |  |  |  |
| `ReferenceDocumentCategory` |  | | `_DocItem` | `ReferenceDocumentCategory` |  |  |
| `ReferenceDocument` |  | | `_DocItem` | `ReferenceDocument` |  |  |
| `ReferenceDocumentItem` |  | | `_DocItem` | `ReferenceDocumentItem` |  |  |
| `CompanyCode` |  | | `_DocItem` | `CompanyCode` |  |  |
| `LegalRegulation` |  | | `_License` | `LegalRegulation` |  |  |
| `TrdCmplncLicenseType` |  | | `_License` | `TrdCmplncLicenseType` |  |  |
| `TrdCmplncLicenseOwner` |  | | `_License` | `TrdCmplncLicenseOwner` |  |  |
| `TrdCmplncLicenseCategory` |  | | `_License` | `TrdCmplncLicenseCategory` |  |  |
| `TrdCmplncLicense` |  | | `_License` | `TrdCmplncLicense` |  |  |
| `ExtTrdCmplncLicense` |  | | `_License` | `ExtTrdCmplncLicense` |  |  |
| `TrdCmplncLicenseRemark` |  | | `_License` | `TrdCmplncLicenseRemark` |  |  |
| `TrdCmplncLicenseStatus` |  | | `_License` | `TrdCmplncLicenseStatus` |  |  |
| `ValidityStartDate` |  | | `_License` | `ValidityStartDate` |  |  |
| `ValidityEndDate` |  | | `_License` | `ValidityEndDate` |  |  |
| `_DocItem` | | ✓ | | | | |
| `_License` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocItem` | `I_TrdCmplncDocItemBasic` | [0..1] |
| `_License` | `I_TrdCmplncLicense` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CTRDDOCITMLCASN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED 
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL 
@EndUserText.label: 'Trade Compliance Document Item License Assignment'
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]
define view C_TrdCmplncDocItmLicAssgmt
  as select from I_TrdCmplncDocItmLicAssgmt as Item
  association [0..1] to I_TrdCmplncDocItemBasic      as _DocItem on $projection.TrdCmplncDocItemUUID = _DocItem.TrdCmplncDocItemUUID
  association [0..1] to I_TrdCmplncLicense      as _License on $projection.TrdCmplncLicenseUUID = _License.TrdCmplncLicenseUUID
{
  key Item.TrdCmplncDocItemUUID,
  key TrdCmplncLicenseUUID,
      _DocItem.ReferenceDocumentCategory,
      _DocItem.ReferenceDocument,
      _DocItem.ReferenceDocumentItem,
      _DocItem.CompanyCode,

      _License.LegalRegulation,
      _License.TrdCmplncLicenseType,
      _License.TrdCmplncLicenseOwner,
      _License.TrdCmplncLicenseCategory,
      _License.TrdCmplncLicense,
      _License.ExtTrdCmplncLicense,
      _License.TrdCmplncLicenseRemark,
      _License.TrdCmplncLicenseStatus,
      _License.ValidityStartDate,
      _License.ValidityEndDate,

      _DocItem,
      _License

}
```
