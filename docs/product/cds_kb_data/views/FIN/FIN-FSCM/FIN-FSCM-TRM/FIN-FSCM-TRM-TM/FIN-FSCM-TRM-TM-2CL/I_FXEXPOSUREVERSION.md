---
name: I_FXEXPOSUREVERSION
description: "Fxexposureversion"
app_component: FIN-FSCM-TRM-TM-2CL
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
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-TM-2CL
  - lob:Other
---
# I_FXEXPOSUREVERSION

**Fxexposureversion**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FXExposureVersionUUID` | ✓ | |  | `fx_exposure_v_uuid` |  |  |
| `ForeignExchangeExposureVersion` |  | |  | `fx_exposure_version_nr` |  |  |
| `FXExposureUUID` |  | |  | `fx_exposure_uuid` |  |  |
| `ForeignExchangeExposure` |  | |  | `fx_exposure_id` |  |  |
| `FXExposureType` |  | |  | `fx_exposure_type` |  |  |
| `CompanyCode` |  | |  | `company_code` |  |  |
| `Portfolio` |  | |  | `portfolio` |  |  |
| `CostCenter` |  | |  | `cost_center` |  |  |
| `ProfitCenter` |  | |  | `profit_center` |  |  |
| `Country` |  | |  | `country` |  |  |
| `WBSElementInternalID` |  | |  | `wbs_element` |  |  |
| `OnBehalfOfCompany` |  | |  | `on_behalf_of_comp_code` |  |  |
| `Segment` |  | |  | `segment` |  |  |
| `FXExposureValidFromDate` |  | |  | `valid_from` |  |  |
| `FXExposureDueDate` |  | |  | `due_date` |  |  |
| `FXExposureAmountInRiskCurrency` |  | |  | `amount` |  |  |
| `FXExposureRiskCurrency` |  | |  | `risk_currency` |  |  |
| `FXExposureTargetCurrency` |  | |  | `target_currency` |  |  |
| `FXExposureDirection` |  | |  | `direction` |  |  |
| `FXExposureStatus` |  | |  | `status` |  |  |
| `FXExposureExternalID` |  | |  | `external_id` |  |  |
| `FXExposureCreationMode` |  | |  | `fx_exposure_creation_mode` |  |  |
| `FXExposureCreatedBy` |  | |  | `createdby` |  |  |
| `FXExposureCreatedAtDteTme` |  | |  | `createdat` |  |  |
| `FXExposureLastChangedBy` |  | |  | `lastchangedby` |  |  |
| `FXExposureLastChangedAtDteTme` |  | |  | `lastchangedat` |  |  |
| `LocalLastChangeDateTime` |  | |  | `local_last_change_datetime` |  |  |
| `ChangeDocObject` |  | |  | `changedoc_object_id` |  |  |
| `FXExposureStsChgReasonText` |  | |  | `exp_status_change_reason` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [ #NONE ]

@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'FX Exposure Version'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL }

@VDM.viewType: #BASIC

define view entity I_FXExposureVersion
  as select from fxemt_exposure_v

{
  key fx_exposure_v_uuid         as FXExposureVersionUUID,

      fx_exposure_version_nr     as ForeignExchangeExposureVersion,
      fx_exposure_uuid           as FXExposureUUID,
      fx_exposure_id             as ForeignExchangeExposure,
      fx_exposure_type           as FXExposureType,
      company_code               as CompanyCode,
      portfolio                  as Portfolio,
      cost_center                as CostCenter,
      profit_center              as ProfitCenter,
      country                    as Country,
      wbs_element                as WBSElementInternalID,
      on_behalf_of_comp_code     as OnBehalfOfCompany,
      segment                    as Segment,
      valid_from                 as FXExposureValidFromDate,
      due_date                   as FXExposureDueDate,

      @Semantics.amount.currencyCode: 'FXExposureRiskCurrency'
      amount                     as FXExposureAmountInRiskCurrency,
      risk_currency              as FXExposureRiskCurrency,
      target_currency            as FXExposureTargetCurrency,
      direction                  as FXExposureDirection,
      
      status                     as FXExposureStatus,
      external_id                as FXExposureExternalID,
      fx_exposure_creation_mode  as FXExposureCreationMode,
      createdby                  as FXExposureCreatedBy,
      createdat                  as FXExposureCreatedAtDteTme,
      lastchangedby              as FXExposureLastChangedBy,
      lastchangedat              as FXExposureLastChangedAtDteTme,
      local_last_change_datetime as LocalLastChangeDateTime,
      changedoc_object_id        as ChangeDocObject,
      exp_status_change_reason   as FXExposureStsChgReasonText
}
```
