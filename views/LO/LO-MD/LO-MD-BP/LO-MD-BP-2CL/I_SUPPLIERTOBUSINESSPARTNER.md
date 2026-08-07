---
name: I_SUPPLIERTOBUSINESSPARTNER
description: SUPPLIERTOBusiness Partner
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - supplier
  - business-partner
  - partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
  - bo:BusinessPartner
---
# I_SUPPLIERTOBUSINESSPARTNER

**SUPPLIERTOBusiness Partner**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerUUID` | ✓ | |  | `partner_guid` |  |  |
| `Supplier` |  | |  | `vendor` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVIVENDLINK'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: 'IsBusinessPurposeCompleted'

@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
          automatic : true
       }
    }
}

@ClientHandling.algorithm : #SESSION_VARIABLE

@EndUserText.label: 'Supplier to BusinessPartner Relationship'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]  
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION  
@ObjectModel.sapObjectNodeType.name: 'SupplierBusinessPartner'                                                                   
@ObjectModel.representativeKey: 'BusinessPartnerUUID'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_SupplierToBusinessPartner
  as select from cvi_vend_link
  association [1..1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartnerUUID = _BusinessPartner.BusinessPartnerUUID
  association [1..1] to I_Supplier        as _Supplier        on $projection.Supplier = _Supplier.Supplier
  
{
  key partner_guid         as BusinessPartnerUUID,
      cvi_vend_link.vendor as Supplier, 
      _Supplier,
      _BusinessPartner
}
```
