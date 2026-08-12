---
name: I_IT_ELECTRONICDOCINVOICE
description: "IT Electronicdocinvoice"
app_component: CA-GTF-CSC-EDO-IT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-IT
  - lob:Cross-Application Components
---
# I_IT_ELECTRONICDOCINVOICE

**IT Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-IT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  |  |  |
| `IT_EDocProgressiveNumber` |  | |  |  |  |  |
| `IT_ElectronicDocRequestID` |  | |  |  |  |  |
| `IT_ElectronicDocPartnerStatus` |  | |  |  |  |  |
| `IT_ElectronicDocSenderCtryCode` |  | |  |  |  |  |
| `IT_ElectronicDocSenderTaxID` |  | |  |  |  |  |
| `ElectronicDocBPType` |  | |  |  |  |  |
| `ElectronicDocBPTypeText` |  | |  |  |  |  |
| `IT_ElectronicDocCustEmailAddr` |  | |  |  |  |  |
| `IT_ElectronicDocODN` |  | |  |  |  |  |
| `CAOfficialDocumentNumber` |  | |  |  |  |  |
| `ElectronicDocProcess` |  | |  |  |  |  |
| `ElectronicDocCompanyCode` |  | |  |  |  |  |
| `_EDCDocPartnerStatText` | | ✓ | | | | |
| `_ElectronicDocProcessText` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ObjectModel: {
  usageType:{
    serviceQuality: #C,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #UI_PROVIDER_PROJECTION_SOURCE],
  modelingPattern: #NONE
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Italy Fattura'

define view entity I_IT_ElectronicDocInvoice
  as select from R_IT_ElectronicDocInvoice
{

  key ElectronicDocUUID,
      IT_EDocProgressiveNumber,
      IT_ElectronicDocRequestID,
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'C_IT_ElectronicDocPartStatVH', element: 'IT_ElectronicDocPartStat' }, useAsTemplate: true }]
      @ObjectModel.text.association: '_EDCDocPartnerStatText'
      IT_ElectronicDocPartnerStatus,
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_CountryVH', element: 'Country' }, useAsTemplate: true }]
      @ObjectModel.text.association: '_CountryText'  
      IT_ElectronicDocSenderCtryCode,
      IT_ElectronicDocSenderTaxID,
      @API.element.releaseState: #DEPRECATED 
      @API.element.successor: 'ElectronicDocBPTypeText'
      @API.element.decommissioningPlannedForYearMonth: '2027-03'
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_ElectronicDocPartnerTypeVH', element: 'ElectronicDocBPType' } }]
      ElectronicDocBPType, 
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_ElectronicDocPartnerTypeVH', element: 'ElectronicDocBPTypeDesc' } }]
      @EndUserText.label: 'Business Partner Type Description'
      ElectronicDocBPTypeText,
      IT_ElectronicDocCustEmailAddr,
      IT_ElectronicDocODN,
      @EndUserText.label: 'Official Document Number'
      CAOfficialDocumentNumber,
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_ElectronicDocProcessText', element: 'ElectronicDocProcess' }, useAsTemplate: true }]
      @ObjectModel.text.association: '_ElectronicDocProcessText'   
      ElectronicDocProcess,
      @Consumption.valueHelpDefinition: [ { entity:  { name:    'I_CompanyCodeVH', element: 'CompanyCode' }, useAsTemplate: true }]
      @ObjectModel.text.association: '_CompanyCode'   
      ElectronicDocCompanyCode,
      
      _EDCDocPartnerStatText,
      _ElectronicDocProcessText,
      _CountryText,
      _CompanyCode
            
}
```
