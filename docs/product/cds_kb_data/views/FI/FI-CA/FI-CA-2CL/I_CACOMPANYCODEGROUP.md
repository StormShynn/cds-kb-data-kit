---
name: I_CACOMPANYCODEGROUP
description: "CACompany CodeGROUP"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - company-code
  - component:FI-CA-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_CACOMPANYCODEGROUP

**CACompany CodeGROUP**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CACompanyCodeGroup` | ✓ | |  | `opbuk` |  |  |
| `CAPaymentCompanyCode` |  | |  | `pybuk` |  |  |
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CACompanyCodeGroupText` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Company Code Group'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACompanyCodeGroup',
                sapObjectNodeType.name: 'ContrAcctgCompanyCodeGroup',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACompanyCodeGroup
  as select from tfk001g

  association [0..*] to I_CACompanyCodeGroupText as _Text        on $projection.CACompanyCodeGroup = _Text.CACompanyCodeGroup
  association [1..1] to I_CompanyCode            as _CompanyCode on $projection.CAPaymentCompanyCode = _CompanyCode.CompanyCode

{
      @ObjectModel.text.association: '_Text'
  key opbuk as CACompanyCodeGroup,
      
      @ObjectModel.foreignKey.association: '_CompanyCode'
      pybuk as CAPaymentCompanyCode,

      _Text,
      _CompanyCode
}
```
